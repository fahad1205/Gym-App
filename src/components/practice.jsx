// import React, { useState } from "react";
// import { Button, TextField, Typography } from "@mui/material";

// function Register() {
//   const [inputs, setInputs] = useState([{ name: "", email: "", password: "" }]);

//   const handleChange = (e) => { 
//     setInputs((prevState)=>({
//       ...prevState,
//       [e.target.name] : e.target.value
//     }))
//   }

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     // localStorage.setItem("inputs", JSON.parse(inputs))
//     console.log(inputs);
//   }
//   return (
//     <div>
//       <Typography margin={6} variant="h2">
//         Hello world indian codes youtube
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           value={inputs.name}
//           onChange={handleChange}
//           type="text"
//           sx={{ margin: 3 }}
//           variant="standard"
//           placeholder="Name"
//         />

//         <TextField
//           name="email"
//           value={inputs.email}
//           onChange={handleChange}
//           type="email"
//           sx={{ margin: 3 }}
//           variant="filled"
//           placeholder="email"
//         />

//         <TextField
//           name="password"
//           value={inputs.password}
//           onChange={handleChange}
//           type="password"
//           sx={{ margin: 3 }}
//           variant="outlined"
//           placeholder="password"
//         />

//         <hr />
//         <Button
//         type="submit"
//           sx={{ margin: 3 }}
//           size="small"
//           variant="outlined"
//           color="success"
//         >
//           SUBMIT
//         </Button>
//         <Button color="warning" sx={{ margin: 3 }} size="medium" variant="text">
//           second
//         </Button>

//         <Button
//           color="success"
//           sx={{ margin: 3 }}
//           size="large"
//           variant="contained"
//         >
//           third
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Register;