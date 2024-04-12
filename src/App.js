import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextyForm from './components/TextyForm'
import Alert from './components/Alert'
import React, { useState } from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import { Routes } from "react-router-dom"

let tittle = "PortFolio";
let about = "Know More"
let theme = ''
let darkmystyle = {
    color :'white',
    backgroundColor :'#0d2b42',
}

let lightmystyle = {
    color :'#042743',
    backgroundColor :'white',
}
function App() {
    
    
    const [mystyle, setMyStyle] = useState({})

    
    

    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
    // const [background, changeBg] = useState(null)

    
    // const changeTheme = () =>{
    //     if (background === null) {
    //         changeBg('pink')
    //         console.log(background)
    //     } else if (background === 'pink') {
    //         changeBg('green')
    //         console.log(background)
    //     } else if (background === 'green') {
    //         changeBg(null)
    //         console.log(background)
    //     }
    // }

    const showAlert = (message, type) => {
        setAlert({
            message:message,
            type:type
        })

        setTimeout(() => {
            console.log('removed alert')
        setAlert(null);
        }, 1500)
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#0d2b42' //style.backgroundcolor = 'gray'
            console.log('A')
            showAlert("Dark Mode Activated", "success")
            // document.title = 'TextUtils - Dark'
            // setInterval(()=>{
            //     document.title = 'Download Now!!!!'
            // }, 1000);
            // setInterval(()=>{
            //     document.title = 'TextUtils App'
            // }, 2000)
            setMyStyle(darkmystyle)
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("Light Mode Activated", "success")
            // document.title = 'TextUtils - Light'
            setMyStyle(lightmystyle)
        }
    }
    
    

    return (
        <>
        {/* <Router> */}
        <Navbar tittle={tittle} about={about} mode={mode} togglemode={toggleMode} theme={theme}/>
        {/* <Navbar tittle={tittle} about={about} mode={mode} togglemode={toggleMode} theme={theme}/> */}
        <Alert alert={alert}/>
        <div className='container my-3'>
        {/* <Routes> */}
            <About mystyle={mystyle}/>
            {/* <Route exact path="/about" element={<About mystyle={mystyle}/>} />
            <Route exact path="/" element={<TextyForm showAlert={showAlert} heading="Enter your text to analyzed below" mode={mode}/>}/> */}
            <TextyForm showAlert={showAlert} heading="Enter your text to analyzed below" mode={mode}/>
        {/* </Routes> */}
        </div>
        {/* </Router> */}
        </>
    )
}

export default App;