import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'

export default function AdPost() {
  const [form, setForm] = useState({
    caption: "",
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("mytoken");
      if (!token) {
        alert("Please login first.");
        return;
      }
      if (!form.caption || !form.image) {
        alert("Caption and image are required.");
        return;
      }

      const formData = new FormData();
      formData.append("caption", form.caption);
      formData.append("image", form.image);
      const res = await axios.post(
        "http://localhost:1000/post/create",
        formData,
        {
          headers: {
            "auth-token": token
          }
        }
      );
      if (res.data.success) {
        alert("Data added to db");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      const message = error?.response?.data?.message || error.message || "Request failed";
      alert(message);
      console.log("AdPost error:", error?.response?.data || error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Caption"
          variant="outlined"
          value={form.caption}
          onChange={(e) => setForm({ ...form, caption: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          type="file"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
