import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

function LoginPage() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  console.log(inputs);
  // const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // const{value,name} = e.target
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("users");

    const { email, password } = inputs;
    if (email === "") {
      alert("email required");
    } else if (password === "") {
      alert("password required");
    } else if (password.length < 6) {
      alert("invalid paswword length");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((ele, k) => {
          return ele.email === email && ele.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid details");
        } else {
          alert("login succesfull");
          navigate("/");
        }
      }
    }
  };
  const imageUrl =
    "https://images.pexels.com/photos/7991660/pexels-photo-7991660.jpeg";
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    height: '100%',
    width: '100%' ,
  };

  return (
    <div style={styles}>
      <form onSubmit={handleSubmit}>
        <Box
          bgcolor="rgb(0,0,0,0.2)"
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 40px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Sign In
          </Typography>

          <TextField
            inputProps={{ style: { color: "white" } }}
            sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
            value={inputs.email}
            onChange={handleChange}
            name="email"
            variant="outlined"
            placeholder="Email id"
            type="email"
            margin="normal"
          />
          <TextField
            inputProps={{ style: { color: "white" } }}
            sx={{ bgcolor: "rgba(255,255,255,0.3)" }}
            value={inputs.password}
            onChange={handleChange}
            name="password"
            variant="outlined"
            placeholder="Password"
            type="password"
            margin="normal"
          />

          <Button
            endIcon={<LoginOutlinedIcon />}
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 2 }}
            type="submit"
          >
            LOG IN
          </Button>

          <Button sx={{ marginTop: 3, borderRadius: 2 }}>
            <Link to="/"> Not a user Register</Link>
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default LoginPage;
