import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Aboutus(props) {
  document.title='Text Assist - About'
  return (
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0" >
          <Accordion.Header >ABOUT SITE</Accordion.Header>
          <Accordion.Body style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}>
          
          <p>This Website main purpose is to provide user a great text editor along with different translations.</p>
          <p>We provide our users with various helping tools such text uppercase,lowercase converter, text copying, extra spaces remover, replace word in text.</p>
          <p>
            It also provides a brief summary about the text such as number of 
            characters and words etc.
          </p>
          <p>This Website provides user to detect any language and can translate it to Hindi, English, Spanish, German, French.</p>
          <p>It can also provide English Text Voice Assist</p>
          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0" >
          <Accordion.Header >ABOUT CREATOR</Accordion.Header>
          <Accordion.Body style={{backgroundColor: props.mode==='dark'?'#011e48':'white', color:props.mode==='dark'?'white':'black'}}>
          
          <p>This Website solely made by Vaibhav Kumar</p>
          <p>You can contact Creator by following means of github,email,linkedin</p>
          <p>Email Id- vaibhav327kumar@gmail.com</p>
          <li><a href="https://www.linkedin.com/in/vaibhav-kumar-017336237/">LinkedIn</a></li>
          <li><a href="https://github.com/vaibhavKS9">Github</a></li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    
    
    
    </div>
  )
}
