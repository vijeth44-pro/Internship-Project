import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export default function CreatePost() {
  const [form, setForm] = useState({
    caption: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("mytoken");
      const res = await axios.post("http://localhost:1000/post/create", form, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data);
      if (res.data.success) {
        alert("Data added Successfully!");
        setForm({ caption: "", image: "" });
      }
    } catch (error) {
      console.log(error);
      alert("Error adding data !");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Post</h1>
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
          label="Caption"
          variant="outlined"
          name="caption"
          onChange={handleChange}
          value={form.caption}
        />
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          name="image"
          onChange={handleChange}
          value={form.image}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Post
        </Button>
      </Box>
    </div>
  );
}