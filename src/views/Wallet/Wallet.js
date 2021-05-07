import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import { AccountBalance, DateRange } from "@material-ui/icons";
import CardFooter from "components/Card/CardFooter";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";
import Table from "components/Table/Table.js"
import CardBody from "components/Card/CardBody";

const useStyles = makeStyles(styles);

export default function Wallet() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AccountBalance />
              </CardIcon>
              <p className={classes.cardCategory}>Saldo Actual</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
              <h5 className={classes.cardTitle}>(+ $34,245 invertidos)</h5>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Último Depósito: hace un mes
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" alignItems="center">
        <GridItem xs={12} sm={8} md={8}>
          <div className={classes.operations}>
            <Button fullWidth color="success">
              Ingresar Dinero
            </Button>
            <Button fullWidth color="success">
              Extraer Dinero
            </Button>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Historial de Movimientos</h4>
              <p className={classes.cardCategoryWhite}>
                Ingresos y extracciones realizadas
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHead={["Operacion", "Origen", "Fecha y Hora", "Monto"]}
                tableData={[
                  ["Ingreso", "BBVA", "12/03/2021 - 14:00", "$36,738"],
                  ["Ingreso","Santander Río", "10/02/2021 - 11:44", "$23,789"],
                  ["Extracción","Bru Bank", "05/01/2021 - 18:31", "$56,142"],
                  ["Ingreso","Banco Galicia", "11/11/2020 - 13:23", "$38,735"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}