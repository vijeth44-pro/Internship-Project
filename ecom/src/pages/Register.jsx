import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    useremail: "",
    userphone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); //
  };

  const handleSubmit = async() =>{
    try {
        const res = await axios.post("http://localhost:1000/users/addUser", form)
        console.log(res.data)
        if(res.data.success){
            alert("Data added sucessfully")
        }

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-around", m: 4 }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="useremail"
          onChange={handleChange}
          value={form.useremail}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="userphone"
          onChange={handleChange}
          value={form.userphone}
        />

        <Button variant="contained" onClick={handleSubmit}>Add User</Button>
      </Box>
    </div>
  );
}
