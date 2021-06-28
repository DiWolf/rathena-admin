import { FlexBox, Button } from "@ui5/webcomponents-react";
export const Columnas = [
  {
    Header: "Folio",
    accessor: "folio",
    headerTooltip: "Folio de Acta",
  },
  {
    Header: "No. de Acta",
    accessor: "noActa",
    headerTooltip: "No. de Acta",
  },
  {
    Header: "Fecha de Sesión",
    accessor: "fechaSesion",
    headerTooltip: "Fecha de Sesión",
  },
  {
    Header: "Tipo de Sesión",
    accessor: "tipoSesion",
    headerTooltip: "Tipo de Sesión",
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    id: "actions",
    Header: "Acciones",
    width: 150,
    canResize: false,
    Cell: (instance) => {
      console.log(instance);
      return (
        <FlexBox>
          <Button icon="edit" id="test" />
          <Button icon="delete" />
          <Button icon="detail-view" />
        </FlexBox>
      );
    },
  },
];
