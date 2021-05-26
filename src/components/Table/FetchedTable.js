import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { Modal } from "@material-ui/core";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import { OpenWithOutlined } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const {
    tableHeaderTags,
    tableHeaderJsonNames,
    link,
    tableHeaderColor,
  } = props;

  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [amplifiedContent, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(link, {
        method: "GET",
        headers: new Headers(
          { "Content-type": "application/json" },
          { "Access-Control-Allow-Origin": true }
        ),
        mode: "no-cors",
      })
      .then((response) => {
        setFiles(response.data);
      });
  }, []);

  const amplify = function (records) {
    console.log(records);
    console.log(records[0]);
    setContent(records);
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  const loading = "Cargando Datos...";

  return (
    <div className={classes.tableResponsive}>
      <Modal open={open} onClose={handleClose}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <Table className={classes.table}>
                    {amplifiedContent[0] !== undefined ? (
                      <TableHead
                        className={classes[tableHeaderColor + "TableHeader"]}
                      >
                        <TableRow className={classes.tableHeadRow}>
                          {Object.keys(amplifiedContent[0]).map(
                            (field, key) => {
                              return (
                                <TableCell
                                  key={key}
                                  className={
                                    classes.tableCell +
                                    " " +
                                    classes.tableHeadCell
                                  }
                                  key={key}
                                >
                                  {field}
                                </TableCell>
                              );
                            }
                          )}
                        </TableRow>
                      </TableHead>
                    ) : (
                      <TableRow>
                        <TableCell>{null}</TableCell>
                      </TableRow>
                    )}
                    <TableBody>
                      {amplifiedContent !== undefined &&
                      amplifiedContent !== null
                        ? amplifiedContent.map((content, key) => {
                            return (
                              <TableRow
                                key={key}
                                className={classes.tableBodyRow}
                              >
                                {Object.keys(content).map((field, key) => {
                                  return Array.isArray(content[field]) ? (
                                    <TableCell
                                      className={classes.tableCell}
                                      key={key}
                                    >
                                      <Button
                                        onClick={() => amplify(content[field])}
                                      >
                                        Ver
                                      </Button>
                                    </TableCell>
                                  ) : (
                                    <TableCell
                                      className={classes.tableCell}
                                      key={key}
                                    >
                                      {content[field]}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })
                        : null}
                    </TableBody>
                  </Table>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Modal>

      <Table className={classes.table}>
        {tableHeaderTags !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHeaderTags.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {files !== undefined
            ? files.map((file, key) => {
                return (
                  <TableRow key={key} className={classes.tableBodyRow}>
                    {tableHeaderJsonNames.map((field, key) => {
                      return Array.isArray(file[field]) ? (
                        <TableCell className={classes.tableCell} key={key}>
                          <Button
                            color="info"
                            justIcon
                            round
                            onClick={() => amplify(file[field])}
                          >
                            <OpenWithOutlined />
                          </Button>
                        </TableCell>
                      ) : (
                        <TableCell className={classes.tableCell} key={key}>
                          {file[field]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
};
