import React from "react";
import DividerWithText from "../../components/Divider/DividerWithText.js";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { ButtonBase } from "@material-ui/core";
import GoogleButton from "../../components/Google/Login";
import Button from "../../components/CustomButtons/Button";
import authService from "services/auth.service.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Alert from '@material-ui/lab/Alert';
import { Redirect } from "react-router";


class EmailConfirmation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }



  componentWillMount() {

    const query = new URLSearchParams(this.props.location.search);

    const token = query.get('token')

    authService.confirmEmail(token).then(
        () => {
          this.setState({
            successMessage: 'OK'
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            message: resMessage
          });
        }
      );
    
    }
  render() {

    return (

        <form >

        {this.state.successMessage && (
            <Redirect to='/login'  />
        )}

        {this.state.message && (
            <div>{this.state.message}</div>
        )}

        </form>
    );
  }


}

export default EmailConfirmation;
