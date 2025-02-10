import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("File upload failed!");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "250px auto" ,height:"200px",width:"400px",border:"2px solid",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"10px",boxShadow:"2px 2px 10px rgba(0,0,0,0.2"}}>    
      <h2>Upload a File</h2>
      <br />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <input type="file" onChange={handleFileChange} />
      </div>
      <br />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;

