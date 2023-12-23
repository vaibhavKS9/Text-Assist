import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function TextForm(props) {
  document.title='Text Assist - Home'

const handleCopy = () => {
  navigator.clipboard.writeText(state); 
  props.showAlert("Copied to Clipboard!", "success");
}

const handleExtraSpaces = () => {
  let newText = state.split(/[ ]+/);
  setstate(newText.join(" "));
  props.showAlert("Extra Spaces Removed!", "success");
}

  const handleDetect = async () => {
    try {
      const response = await fetch('/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({state}),
      });
  
      // Handle the response from the backend here
      const result = await response.json();
      console.log(result);
      setstate_lang(result);
      props.showAlert("Language Detected", "success",state_lang);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  const handleTranslate = async (arg) => {
    
  
    try {
      const response = await fetch('/lang', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state,arg }),
      });
  
      // Handle the response from the backend here
      const result = await response.json();
      console.log(result);
      setstate(result.val1);
      setstate_lang(result.val2);
      props.showAlert("Language Translated to", "success",result.val2);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
  

    const handleUpClick1=()=>{
        // console.log('handleupclick');
        let newtext=state.toUpperCase();
        setstate(newtext);
        props.showAlert("Converted to UPPERCASE!", "success");
    }
    const handleUpClick2=()=>{
        // console.log('handleupclick');
        let newtext=state.toLowerCase();
        setstate(newtext);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange=(event)=>{
        // console.log('handleupchange');
        setstate(event.target.value);
    }

    
    const handlefindChange = (event) => {
        findWord(event.target.value);
      };
    
      const handleReplaceChange = (event) => {
    
      console.log(replaceWord(event.target.value)) ;
    
      };
    
      const handleReplaceClick = () => {
        if(fWord===''){
          props.showAlert("Enter Word to be Replaced!", "warning");
          
        }
        else if(rWord===''){
          props.showAlert("Enter Word to be Replaced With!", "warning");
        }
        else{
          let newText = state.replaceAll(fWord,rWord);
          // console.log(fWord);
          // console.log("rWord",rWord);
          setstate(newText);
          props.showAlert("Words Replaced!", "success");
        }
        
    
      };

      const speak = async() => {
        handleDetect();
        console.log("staelang ",state_lang);
        if(state_lang==='english'){
          let msg=new SpeechSynthesisUtterance();
          msg.text=state;
          window.speechSynthesis.speak(msg);
        }
        else{
          props.showAlert("Sorry Can only Voice Assist in English", "info",state_lang);
          let msg=new SpeechSynthesisUtterance();
          msg.text="Sorry Can only Voice Assist in English";
          window.speechSynthesis.speak(msg);
        }
        
      }
    
  

    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState(""); 
    const [state, setstate] = useState("Enter Text Here");
    const [state_lang, setstate_lang] = useState("english");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    
    <h1>{props.heading}</h1>
    <div className="mb-3 ">
    
    <textarea className="form-control my-3" value={state} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick1}>Convert to UPPERCASE</button>
    <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick2}>Convert to lowercase</button>
    <button type="submit" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button type="submit" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    {/* <button type="submit" className="btn btn-primary mx-1" onClick={handleMath}>Mathify</button> */}
    <div className="my-3 mx-1">
    <DropdownButton id="dropdown-item-button" variant="success" title="Translate To">
      <Dropdown.Item as="button" onClick={() =>handleTranslate('en')}>English</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleTranslate('hi')}>Hindi</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() =>handleTranslate('es')}>Spanish</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() =>handleTranslate('de')}>German</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() =>handleTranslate('fr')}>French</Dropdown.Item>
    </DropdownButton>
    <button type="submit" className="btn btn-success my-1" onClick={handleDetect}>Detect Language</button>
    <button type="submit" className="btn btn-success mx-1" onClick={speak}>Speak Text</button>
    </div>

    <InputGroup>
        <InputGroup.Text style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}>Enter Word to be Replaced</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" value={fWord} onChange={handlefindChange} style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}/>
    </InputGroup>
    <InputGroup>
        <InputGroup.Text style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}>Enter Word to be Replaced With</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" value={rWord} onChange={handleReplaceChange} style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}/>
    </InputGroup>
    
    <button type="submit" className="btn btn-danger my-2" onClick={handleReplaceClick}>Replace Words</button>
    
    
    </div>
    
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0" >
          <Accordion.Header >TEXT SUMMARY</Accordion.Header>
          <Accordion.Body style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}>
          
          <p>{state.split( /\s+/).filter(i => i).length} words and {state.length} characters</p>
          <p>{0.008 *  state.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <p>Language Detected - {state_lang===null?'Unable to detect':state_lang}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    
    
    
    </div>
    </>
    
  )
}
