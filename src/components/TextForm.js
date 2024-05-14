import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.header}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{background: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={() => setText('')}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above in the textbox to preview."}</p>
            </div>
        </>
    );
}