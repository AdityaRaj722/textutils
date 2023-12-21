import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    // console.log("hui");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "Success");
  };
  const handleloClick = () => {
    // console.log("hui");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleclearClick = () => {
    // console.log("hui");
    let newText = ' ';
    setText(newText);
    props.showAlert("Cleared All the text!", "success");
  };
  const handleSentenceCaseClick = () => {
    let newText = text.toLowerCase();
    newText = newText.replace(/(^\s*\w|[\\.!\\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
    props.showAlert("Converted First word in capital!", "success");
  };
  const handlecopy = () => {
    // console.log("hui");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied all the text to Clipboard!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("mui");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("Temp text");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?`white`:`#042743`}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 mr-6">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor:props.mode==='dark'?`grey`:`light`,color:props.mode==='dark'?`white`:`#042743`}}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        {/* <div className="mb-3"></div> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloClick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>
        Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSentenceCaseClick}>
        Convert To Sentence Case
      </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>
        Copy Text
      </button> 
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?`white`:`#042743`}}>
        <h2>Your text summary</h2>
        <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} Charater
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
      </div>
    </>
  );
}
