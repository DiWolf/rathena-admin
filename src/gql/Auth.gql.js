import { gql } from "@apollo/client";
//Define los metodos de login

//Iniciar sesión en un sistema
export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      session
    }
  }
`;
