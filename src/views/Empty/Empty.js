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
const useStyles = makeStyles(styles);
export default function Dashboard() {
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
                Último Depósito: hace 2 horas
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
    </div>
  );
}