import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("SuccessFully Convert the text into the UpperCase" , "success")
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("SuccessFully Convert the text into the LowerCase","success")
    }
    const handleclear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Has been Cleared" , "success")
        
    }
    const handleonChange= (event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    const handleCopy= ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("SuccessFully Copy the Text","success")
    }
    const handleExtraSpaces= ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("SuccessFully Removed the Extra Spaces From the Text","success")
    }
  const [text,setText] = useState('');
    return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
              <textarea className="form-control mt-2" value={text} onChange={handleonChange} id="myBox" rows="8" placeholder='Enter your Text Here' style={{backgroundColor:props.mode ==='dark'?'#022b34':'white' , color : props.mode ==='dark'?'white':'black' }}></textarea>
          </div>
          <button className="btn-info mx-1"  onClick={handleUpClick} >Convert to UpperCase</button>
          <button className="btn-info mx-1" onClick={handlelowClick} >Convert to LowerCase</button>
          <button className="btn-info mx-1"  onClick={handleclear} >Clear</button>
          <button className="btn-info mx-1"  onClick={handleCopy} >Copy Text</button>
          <button className="btn-info mx-1"  onClick={handleExtraSpaces} >Remove Extra Spaces</button>
          
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p >{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Reading Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the TextBox to Preview it here"}</p>
    </div>
    </>
    )
}
