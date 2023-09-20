import React,{ useState } from 'react'


export default function TextForm(props) {
  const doClick=()=>{
    console.log("UpperCase was Clicked" +text)
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("CONVERTED TO UPPERCASE","success")
  }

  const doLower=()=>{
    console.log("LowerCase was Clicked" +text)
    let newText1=text.toLowerCase()
    setText(newText1)
    props.showAlert("CONVERTED TO LOWERCASE","success")
  }
  const doClear=()=>{
    let newText1=''
    setText(newText1)
    props.showAlert("TEXT CLEARED","success")
  }

  const reverseText = () => { //hello
    let splitText = text.split(""); //['h', 'e', 'l', 'l', 'o']
    let reverseingText = splitText.reverse(""); //['o', 'l', 'l', 'e', 'h']
    let joinText = reverseingText.join(""); //olleh
    setText(joinText)
    props.showAlert("TEXT REVERSED","success")
  }



  
  const doBold=()=>{
    setIsBold(!isBold);
    props.showAlert("TEXT MADE BOLD","success")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("TEXT SPOKEN","success")
  }

  const handleOnChange=(event)=>{
    console.log("Handle Onchange")
    setText(event.target.value)
  }

  const doFont=(e)=>{
    setSelectedFont(e.target.value);
  }

  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Arial');

  // text="SET TEXT HEREE" - WRONG WAY TO SET TEXT
  // setText="SET TEXT HERE "-CRORECT WAY TO SET TEXT
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}  >
        <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea name="myTextArea" className="form-control"  id="myTB" value={text} onChange={handleOnChange} style={{ fontWeight: isBold ? 'bold' : 'normal' , fontFamily: selectedFont ,backgroundColor:props.mode==='dark'?'grey':'light' ,color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
  
</div>
<button className="btn btn-primary mx-4 my-2" onClick={doClick}>UPPERCASE</button>

<button className="btn btn-primary  mx-4 my-2" onClick={doBold}>BOLD</button>

<button className="btn btn-primary  mx-4 my-2" onClick={doLower}>LOWERCASE</button>


<button className="btn btn-primary  mx-4 my-2" onClick={doClear}>CLEAR TEXT</button>


<button className="btn btn-primary  mx-4 my-2" onClick={reverseText}>REVERSE TEXT</button>





			<select name="Font" id="8" onChange={doFont} value={selectedFont}>
			<option value="Arial">Arial</option>
						<option value="Caveat">Caveat</option>
									<option value="Comic Sans">Comic Sans</option>
												<option value="Lexend">Lexend</option>
															<option value="Elephant">Elephant</option>
                                  <option value="Pacifico">Pacifico</option>
                              </select>

<button type="submit" onClick={speak} className="btn btn-primary mx-4 my-2">Speak</button>

    </div>
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Preview</h3>
      <p>{text.length>0?text:"ENTER SOME TEXT TO PREVIEW HERE"}</p>
      <h1>THE SUMARRY IS</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} MINUTES READ</p>
    </div>
    </>
  )
}
