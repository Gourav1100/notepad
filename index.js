import React from "react";
import { Button, Fab, Grid, TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./index.module.css";

export default class App extends React.Component {
  respond = () => {
    if (this.state.isUserLoggedIn == true) {
      window.href = "/notes";
      return;
    }
    this.setState({
      currentPage: !this.state.currentPage,
    });
  };
  handleUsernameChange = (event) => {
    const username = event.target.value;
    const regex =
      /^(?:[a-zA-Z_-][a-zA-Z0-9@_-]{5,10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/i;
    const matches = username.match(regex);
    if (matches !== null && matches != undefined && matches.length != 0) {
      this.setState({
        isUsernameCorrect: true,
      });
    } else {
      this.setState({
        isUsernameCorrect: false,
      });
    }
  };
  handlePasswordChange = (event) => {
    const password = event.target.value;
    const regex = /^(?:[a-zA-Z0-9@_#$!^&*]{8,100})$/i;
    const matches = password.match(regex);
    if (matches !== null && matches != undefined && matches.length != 0) {
      this.setState({
        isPasswordCorrect: true,
      });
    } else {
      this.setState({
        isPasswordCorrect: false,
      });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.password.value);
    console.log(event.target.username.value);
  };
  togglePassword = () => {
    this.setState({
      passwordVisibility: !this.state.passwordVisibility,
    });
  };
  constructor(props) {
    super(props);
    this.counter = 1;
    this.state = {
      currentPage: true,
      passwordVisibility: false,
      isUsernameCorrect: false,
      isPasswordCorrect: false,
      isUserLoggedIn: false,
    };
  }
  render() {
    return (
      <Grid
        className={styles.pageContainer}
        container
        id="Home"
        maxWidth={true}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Grid
          id="Home#1"
          className={
            styles.Flex +
            (this.state.currentPage == false ? " " + styles.background_blur : " " + styles.hidden)
          }
          item
          xs={12}
          textAlign={"center"}
        >
          <Grid
            container
            maxWidth={true}
            className={styles.Container}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Grid item xs={12}>
              <Grid
                container
                maxWidth={true}
                padding={5}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={0} md={4}>
                  {/* empty space */}
                </Grid>
                <Grid item xs={12} md={4}>
                  <form onSubmit={this.handleSubmit}>
                    <Grid container maxWidth={true}>
                      <Grid item xs={12} lg={6} textAlign={"center"}>
                        <img src="/logo.png" width="25%" height="auto" />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        marginTop={{ xs: 0, lg: 2 }}
                        textAlign={{ xs: "center", lg: "left" }}
                      >
                        Notepad
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        paddingTop={4}
                        paddingLeft={{ xs: 2, lg: 5 }}
                        paddingRight={{ xs: 2, lg: 5 }}
                      >
                        <TextField
                          name="username"
                          id="user"
                          type="text"
                          label="Username / Email"
                          variant="standard"
                          sx={{ width: "100%" }}
                          autoComplete={"false"}
                          onChange={this.handleUsernameChange}
                        />
                      </Grid>
                      <Grid item xs={10} paddingTop={4} paddingLeft={{ xs: 2, lg: 5 }}>
                        <TextField
                          name="password"
                          id="pass"
                          type={this.state.passwordVisibility == false ? "password" : "text"}
                          label="Password"
                          variant="standard"
                          sx={{ width: "100%" }}
                          autoComplete={"false"}
                          onChange={this.handlePasswordChange}
                        />
                      </Grid>
                      <Grid item xs={2} paddingTop={4} paddingRight={{ xs: 2, lg: 5 }}>
                        <Button
                          variant="icon"
                          sx={{ paddingTop: 2, paddingBottom: 2 }}
                          onClick={this.togglePassword}
                        >
                          {this.state.passwordVisibility == true ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      marginTop={4}
                      paddingRight={{ xs: 2, lg: 5 }}
                      paddingLeft={{ xs: 2, lg: 5 }}
                      textAlign={{ xs: "center", lg: "left" }}
                    >
                      <Button
                        type={"submit"}
                        variant="outlined"
                        sx={{ width: "100%", padding: 2 }}
                        disabled={
                          this.state.isUsernameCorrect == true &&
                          this.state.isPasswordCorrect == true
                            ? false
                            : true
                        }
                      >
                        {this.state.isUsernameCorrect == true &&
                        this.state.isPasswordCorrect == true ? (
                          <CheckCircleIcon />
                        ) : (
                          <UnpublishedIcon />
                        )}{" "}
                        Submit
                      </Button>
                    </Grid>
                  </form>
                </Grid>
                <Grid item xs={0} md={4}>
                  {/* empty space */}
                </Grid>
              </Grid>
            </Grid>
            <div className={styles.goHome}>
              <Fab aria-label="Home" onClick={this.respond}>
                <ExpandMoreIcon />
              </Fab>
            </div>
          </Grid>
        </Grid>
        <Grid
          id="Home#2"
          className={
            styles.Flex +
            (this.state.currentPage == true ? " " + styles.background_blur : " " + styles.hidden)
          }
          item
          xs={12}
          textAlign={"center"}
        >
          <Grid
            container
            maxWidth={true}
            className={styles.Container}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Grid item xs={12} paddingLeft={{ xs: 10, lg: 30 }} paddingRight={{ xs: 10, lg: 30 }}>
              <Grid
                container
                maxWidth={true}
                padding={3}
                spacing={3}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={12} lg={6} textAlign={"center"}>
                  <img src="/logo.png" width="25%" height="auto" />
                </Grid>
                <Grid
                  className={styles.title}
                  item
                  xs={12}
                  lg={6}
                  textAlign={{ xs: "center", lg: "left" }}
                >
                  Notepad
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={styles.goHome}>
            <Fab aria-label="Home" onClick={this.respond}>
              <ExpandMoreIcon />
            </Fab>
          </div>
        </Grid>
      </Grid>
    );
  }
  componentDidMount() {
    document.getElementById("Home").onwheel = () => {
      if (this.counter == 1) {
        setTimeout(this.respond, 100);
      }
    };
    document.getElementById("Home#1").onanimationstart = () => {
      this.counter = 0;
    };
    document.getElementById("Home#2").onanimationstart = () => {
      this.counter = 0;
    };
    document.getElementById("Home#1").onanimationend = () => {
      this.counter = 1;
    };
    document.getElementById("Home#2").onanimationend = () => {
      this.counter = 1;
    };
  }
}
