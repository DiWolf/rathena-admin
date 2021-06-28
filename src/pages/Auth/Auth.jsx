import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../gql/Auth.gql";
import { decodeToken, setToken } from "../../utils/token";
import useAuth from "../../Hooks/useAuthe";
import { Container, Row, Col, Form } from "react-bootstrap";
const Auth = () => {
  //Apollo
  const [login] = useMutation(LOGIN);
  //Seteo de usuario
  const auth = useAuth();
  const { setUser } = auth;
  //fomik
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("El usuario es requerido"),
      password: Yup.string().required("La contraseña es requerida"),
    }),
    onSubmit: async (formData) => {
      const { data } = await login({
        variables: {
          input: formData,
        },
      });
      //Obtener la variable de sesion
      const { session } = data.login;
      setToken(session);
      setUser(decodeToken(session));
    },
  });
  return (
    <>
      <div className="misc-wrapper">
        <div className="misc-content">
          <Container>
            <Row className="justify-content-center">
              <Col sm="12" md="5" lg="4" className="col-4">
                <div className="misc-box">
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                      <label htmlFor="user">Usuario</label>
                      <div className="group-icon">
                        <input
                          id="user"
                          type="text"
                          placeholder="Usuario"
                          className="form-control"
                          value={formik.values.user}
                          onChange={formik.handleChange}
                        />
                        <span className="icon-user text-muted icon-input" />
                      </div>
                      <p className="text-danger">{formik.errors.user}</p>
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="password">Contraseña</label>
                      <div className="group-icon">
                        <input
                          id="password"
                          type="password"
                          placeholder="Contraseña"
                          className="form-control"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                        <span className="icon-lock text-muted icon-input" />
                      </div>
                      <p className="text-danger">{formik.errors.password}</p>
                    </Form.Group>
                    <div className="clearfix">
                      <div className="float-right">
                        <input
                          type="submit"
                          className="btn btn-block btn-primary btn-rounded box-shadow"
                          value="Ingresar"
                        />
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="text-center misc-footer">
                  <p>
                    Copyright © 2021 {process.env.REACT_APP_EMPRESA_INSTALACION}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Auth;
