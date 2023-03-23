import React, { useState } from "react";


export default function TextForm(props) {

  
  const [text, setText] = useState('');
  
  // UPPERCASE
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");

  }

  //LOWERCASE
  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");

  }

  //Clear text
  const handleClearClick = () => {
    toNormal();
    let newText = '';
    setText(newText)
    props.showAlert("Clear Text","success");

  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
   
  }


  /*const handlePaste = (event) => {
    const text = event.clipboardData.getData('Text')
    const value = text.split(' ').join('');
    this.setText({ nameValue: value });
}*/


  // COPY TEXT  
  const handleCopy = () => {
    console.log("I Am Copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text","success");

  }
  // Paste text
  /*const handlePaste = () => {
    console.log("I Am Paste");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  }*/


 //remove extra sapces
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Space","success");

  }
  // bold text 
    const handleBoldClick = () =>{
      console.log("Bold was clicked" + text);
      changeStyle();
      props.showAlert("Converted to All text Bold","success");

    }
    
   function changeStyle(){
      document.getElementById("mybox").style.fontWeight = "bold";
  }
   function toNormal(){
      document.getElementById("mybox").style.fontWeight = "normal";
      props.showAlert("Converted to All text Normal","success");

  }


  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control bg-dark text-light" value={text} placeholder="Enter text here" onChange={handleOnChange} id="mybox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
       {/*  <button type="button" className="btn btn-primary mx-1" onclick="changeStyle()">Click Me</button>*/}
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleBoldClick} onDoubleClick={() => {toNormal();}}>Bold text</button>




      </div>
      <div className="container my-2">
        <h1>Your texr summary</h1>
        <p>{text.length && text?.split(" ").length} words and {text.length} characters</p>
        <p>{text.length && text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>

      </div>
    </>
  )
}
