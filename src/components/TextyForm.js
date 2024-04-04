import React, {useState} from 'react'

export default function TextyForm(props) {
    const [text, SetText] = useState('')
    
    const handlecleartext = () => {
      SetText('')
      props.showAlert("Text Cleared Successfully!!", "warning")
    }

    const handleupClick = () => {
        // console.log("Onchange is clicked: " + text)
        let newText = text.toUpperCase();
        SetText(newText)
        props.showAlert("Converted to Uppercase!!", "primary")
    }
    
    const handlelowClick = () => {
        // console.log("Onchange is clicked: " + text)
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert("Converted to Lowercase!!", "secondary")
    }
    
    const handlecamClick = () => {
        console.log('converting')
       let newtext = text.replace(/\W+(.)/g, function(match, chr) {
           return chr.toUpperCase();
          });

        SetText(newtext)
        props.showAlert("Converted to Camlecase!!", "danger")
    }

    const handlRemovextraspaces = () => {
      let new_Text = text.split(/[ ]+/)
      console.log(new_Text)
      SetText(new_Text.join(" "))
      props.showAlert("Extra space Removed!!", "dark")
    }

    const copyToClipboard = async() => {
      try {
        await navigator.clipboard.writeText(text)
        console.log('Text copied to clipboard:', text);
        props.showAlert("Text copied!", "success")
      } catch (err) {
            console.error('Error copying text to clipboard:', err);
          
      }
    }

    const handleonChange = (event) => {
        // console.log("data is changed!!")
        SetText(event.target.value)
    }



  return (
    <>
    <div style={{color : props.mode === 'light'?'':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor : props.mode === 'dark'?'#09061e':'white', color: props.mode==='light'?'':'white'}} id="FormControlTextarea" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleupClick}>convert to uppercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handlelowClick}>convert to lowercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handlecamClick}>convert to camlecase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={copyToClipboard}>copy text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handlecleartext}>clear text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handlRemovextraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'light'?'':'white'}}>
        <h1>Your text summery</h1>
        <p>will take {(0.4 * text.length)/60}minuts to read</p>
        <p>{text.length !== 0?text.trim().split(' ').length:0} words and {text.length} chracters</p>
        <h2>Preview</h2>
        <p>{text===''?'Enter some text above to previw it here...':text}</p>
    </div>
    </>
  )
}
