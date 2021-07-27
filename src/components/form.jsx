import React, { useState } from "react";
import ProgressBar from "./progressBar";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg"];
  const uploadHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else if (selected == null) return;
    else {
      setFile(null);
      setError("Please choose an image file");
    }
  };
  return (
    <div>
      <form action="">
        <label>
          <input type="file" onChange={uploadHandler}/>
          <span className='plus'></span>
        </label>
        <div>
          {file && <div className="file">{file.name}</div>}
          {error && <div className="error">{error}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default Form;
