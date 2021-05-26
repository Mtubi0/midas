import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem";
import CustomTabs from "components/CustomTabs/CustomTabs";
import GridContainer from "components/Grid/GridContainer";
import { MonetizationOnOutlined } from "@material-ui/icons";
import FetchedTable from "components/Table/FetchedTable";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "85%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SDIB() {
  const classes = useStyles();

  const defaultHeaderTags = [
    "Nombre",
    "Fecha",
    "Cantidad de Registros",
    "Contenido",
  ];
  const defaultHeaderJsonNames = ["fileName", "dateCreated", "size", "records"];

  return (
    <div className={classes.tableResponsive}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Operaciones:"
            headerColor="primary"
            tabs={[
              {
                tabName: "SINACNOR",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "CNPESOSN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "CNDOLASN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "RUEDANOR",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "CIPESORN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "CIDOLARN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Precios:"
            headerColor="primary"
            tabs={[
              {
                tabName: "PRECIERN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PRECIERD",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PREPRIVN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PREPRIVD",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PREANTEN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PREANTED",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PRELIDRN",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "PRELIDRD",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Custodia:"
            headerColor="primary"
            tabs={[
              {
                tabName: "MOVIMDIA",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
              {
                tabName: "MOVIMGTA",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Posiciones y Garantía:"
            headerColor="primary"
            tabs={[
              {
                tabName: "REEJCOMI",
                tabIcon: MonetizationOnOutlined,
                tabContent: (
                  <FetchedTable
                    link="http://localhost:8080/sdib/rueda_oper_contado_normal"
                    tableHeaderTags={defaultHeaderTags}
                    tableHeaderJsonNames={defaultHeaderJsonNames}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
