import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";

import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link, useNavigate } from "react-router-dom";

function Registeration() {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const [data, setData] = useState([]);
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
    const { name, email, password } = inputs;

    if (name === "") {
      alert("name required");
    } else if (email === "") {
      alert("email required");
    } else if (password === "") {
      alert("password required");
    } else if (password.length < 6) {
      alert("invalid paswword length");
    } else {
      console.log(inputs);
      localStorage.setItem("users", JSON.stringify([...data, inputs]));
    }
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
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
            Sign up
          </Typography>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            name="name"
            variant="outlined"
            placeholder="Name"
            type="text"
            margin="normal"
          />
          <TextField
            value={inputs.email}
            onChange={handleChange}
            name="email"
            variant="outlined"
            placeholder="Email id"
            type="email"
            margin="normal"
          />
          <TextField
            value={inputs.password}
            onChange={handleChange}
            name="password"
            variant="outlined"
            placeholder="Password"
            type="password"
            margin="normal"
          />

          <Button
            endIcon={<HowToRegIcon />}
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 2 }}
            type="submit"
          >
            Register
          </Button>

          <Button sx={{ marginTop: 3, borderRadius: 2 }}>
            <Link to="/login"> Already registered Login</Link>
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Registeration;
