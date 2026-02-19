import React from "react";
import { Box, Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "300px",
          margin: "auto",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          //   name=
          //   onChange=
          //   value=
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          //   name=
          //   onChange=
          //   value=
        />
        <Button variant="contained" >Login User</Button>
      </Box>
    </div>
  );
}
