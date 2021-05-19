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

const useStyles = theme  => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://cdna.artstation.com/p/assets/images/images/028/641/936/large/eshan-treasure-chest.jpg?1595064041)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      formData: {
        email: '',
        password: '',
        confirmPassword:''
      },
      submitted: false,
    };
  }
  Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.cash-online.com.ar/">
          Transcon S.A.
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  handleChange = (event) => {
      const { formData } = this.state;
      formData[event.target.name] = event.target.value;
      this.setState({ formData });
  }

  handleRegister(e) {

    e.preventDefault();
    
    this.setState({ submitted: true })

        // perform all neccassary validations
    if(this.state.formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.formData.email)){
        this.setState({
        submitted: false,
        message: "Invalid email address"
        });
    }else if (this.state.formData.password !== this.state.formData.confirmPassword) {
        
        this.setState({
        submitted: false,
        message: "Passwords don't match"
        });
        
    }else {

      // make API call
      authService.register(this.state.formData.email, this.state.formData.password).then(
        () => {
          this.setState({
            submitted: false,
            successMessage: 'Please check your email'
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
            submitted: false,
            message: resMessage
          });
        }
      );
    
    }
  }

  render() {

    const { classes } = this.props;
    const { formData, submitted } = this.state;

    return (
      
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
            <form className={classes.form} onSubmit={this.handleRegister.bind(this)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
                value={formData.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar contraseña"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={this.handleChange}
              />
              {this.state.message && (
                <Alert severity="error">{this.state.message}</Alert>
              )}
              {this.state.successMessage && (
                <Alert severity="success">{this.state.successMessage}</Alert>
              )}
              <Button color="primary" type="submit" fullWidth disabled={submitted}>
                {(submitted && 'Your form is submitted!') || (!submitted && 'Registrar')}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidé mi contraseña
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    Login
                  </Link>
                </Grid>
              </Grid>
              <DividerWithText>O</DividerWithText>
              <Grid container>
                <Grid item xs>
                  <ButtonBase type="submit" variant="contained">
                    <GoogleButton />
                  </ButtonBase>
                </Grid>
              </Grid>
              <Box mt={5}>
                <this.Copyright />
              </Box>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    );
  }


}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Register);
