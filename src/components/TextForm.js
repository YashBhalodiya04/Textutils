import React from "react";
import { useState } from "react";

export default function TextForm(props) {

  const clickedbutton = (e) => {
    let new_text = text.toUpperCase();
    setText(new_text);
    props.showalert("Converted in Uppercase","success")
    e.preventDefault();
  };

  const clickedlobutton = (e) => {
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showalert("Converted in Lowercase","success")
    e.preventDefault();
  };

  const clickedclearbutton = (e) => {
    let new_text = "";
    setText(new_text);
    props.showalert("Text Removed","success")
    e.preventDefault();
  };
  const clickedtrbackbutton = (e) => {
    let new_text = text.trimEnd();
    setText(new_text);
    props.showalert("Removed Starting Extra Spaces","success")
    e.preventDefault();
  };

  const clickedtrstartbutton = (e) => {
    let new_text = text.trimStart();
    setText(new_text);
    props.showalert("Removed Ending Extra Spaces","success")
    e.preventDefault();
  };
  const copytext = (e) => {
    let text = document.getElementById("mybox");
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied","success");
    e.preventDefault();
  };
  
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <div>
          <form>
            <div className="form-group mb-3">
              <h1>{props.heading}</h1>
              <textarea
                className="form-control"
                onChange={handleonchange}
                id="mybox"
                rows="6"
                value={text}
                style= {{resize:"none",color: props.mode === "dark"?"white":"black", backgroundColor:props.mode === "dark"?"gray":"white"}}
              ></textarea>
              <button
                className="btn btn-primary mx-3 my-3"
                onClick={clickedbutton}
                disabled ={text.length === 0}
              >
                Convert To Uppercase
              </button>
              <button
                className="btn btn-primary my-3 mx-3"
                onClick={clickedlobutton}
                disabled ={text.length === 0}
              >
                Convert To Uppercase
              </button>
              <button
                className="btn btn-primary my-3 mx-3"
                disabled ={text.length === 0}
                onClick={clickedtrstartbutton}
              >
                Remove Starting Space
              </button>
              <button
                className="btn btn-primary my-3 mx-3"
                onClick={clickedtrbackbutton}
                disabled ={text.length === 0}
              >
                Remove Ending Space
              </button>
              <button
                className="btn btn-primary my-3 mx-3"
                onClick={clickedclearbutton}
                disabled ={text.length === 0}
              >
                Clear Text
              </button>
              <button
                className="btn btn-primary my-3 mx-3"
                onClick={copytext}
                disabled ={text.length === 0}
              >
                Copy Text
              </button>
              
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h2>Your Text Summery</h2>
        <p>
          {text.split(/\s+/).filter((i)=>{return i.length!==0}).length} Words and {text.length} Charachters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((i)=>{return i.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing to preview!"}</p>
      </div>
    </>
  );
}
