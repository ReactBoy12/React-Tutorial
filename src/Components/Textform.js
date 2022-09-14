import React, { useState } from 'react'

const Textform = (props) => {
    const[text, setText]=useState("");

    const onClickHandler=()=>{
        
        let upperCaseText  = text.toUpperCase()
        setText(upperCaseText);
    }

    const onClicklowHandler=()=>{
        
        let LowerCaseText  = text.toLowerCase()
        setText(LowerCaseText);
    }

    const onClickClearHandler=()=>{
        
        let Clear  = ''
        setText(Clear);
    }
    
    const onChangeHandler=(event)=>{
        
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'  style={{color: props.mode==='dark'?'white':'#18044ae3'}}>
            <h1 className='my-4'>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8"  style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#18044ae3'}}></textarea>
            </div>

            <button className='btn btn-primary' onClick={onClickHandler}>Change to UpperCase</button>
            <button className='mx-4 btn btn-primary' onClick={onClicklowHandler}>Change to LowerCase</button>
            <button className='mx-4 btn btn-primary' onClick={onClickClearHandler}>Clear</button>
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white':'#18044ae3'}}>
            <h1>Letter Summary</h1>
            <h5>{text.split(" ").length} words and {text.length} character</h5>
            <h5>Time required to read is {0.0008*text.split(" ").length}</h5>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something to preview.."}</p>
        </div>


        </>
    )
}

export default Textform