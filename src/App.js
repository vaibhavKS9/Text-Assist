
import './App.css';

import TextForm from './components/TextForm';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  // THE FOLLOWING PART IS ALSO FOR PYTHON BACKEND *****************************************************************************************************************************************
  // const [data, setData] = useState([{}]);
  // useEffect(()=>{
  //   fetch("/members").then(
  //     res=>res.json()
  //   ).then(
  //     data=>{
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // },[])

  // *********************************************************************** HANDLING INPUT FROM REACT *************************************************************************************
  // const [inputData, setInputData] = useState('');
  // in python file add:
  // @app.route("/inputhandle", methods=['POST'])
  // def members():
  //     try:
  //         data = request.json
  //         # Process the data and run your Python program here
  //         # For example, you can access the input data as data['inputData']
          
  //         # Assuming some processing or function call here...
  //         a=data['inputData'] # THIS PART IS OUR WHOLE INPUT STRING
  //         # print("this=",a)
  //         result = {'output': a}
          
  //         return jsonify(result)
  //     except Exception as e:
  //         return jsonify({'error': str(e)})

  // const handleInputChange = (e) => {
  //   setInputData(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('/inputhandle', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ inputData }),
  //     });
  
  //     // Handle the response from the backend here
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error('Error sending data to the backend:', error);
  //   }
  // };


  const [mode, setmode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,message_type,argument)=>{
    setAlert({
      msg:message,
      type:message_type,
      arg:argument
  })
  setTimeout(()=>{
    setAlert(null);

  },1500);
  // AUTO REMOVAL OF ALERT
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#011e48';
      showAlert("DARK MODE ENABLED","success");
      // document.title='dark mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("LIGHT MODE ENABLED","success");
    }
  }


  return (
    <>
<Router>
      

        
      
    

<Navbar title='Home' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  <div className='container my-4' >
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>} />
        <Route exact path="/about" element={<Aboutus mode={mode}/>} />
        </Routes>
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          

  
  
  
  {/* <Aboutus/> */}
  {/* <DarkMode/> */}
  </div>

  {/* ROUTER EXPLAINED AS FOLLOWING */}
  {/* EVERYTHING IN ROUTER AND ROUTES SYNTAX IS COMPLETELY GIVEN ABOVE FOR SINGLE PAGE APPLICATION WITHOUT LOADING THE CONTENT APART FROM CONTAINER AGAIN AND AGAIN */}
  {/* FOR LINK IN ROUTER CHANGE a -> Link and href -> to */}
  {/* ALWAYS USE PATH AS EXACT IN ROUTE FOR EXACT PATH MATCHING OTHERWISE NAMING CONFLICT OF LINK JUST GIVES YOU ONE LINK ONLY AND YOU WONT KNOW THE ERROR */}

  </Router>
  
    </>
    
  );
}

export default App;
