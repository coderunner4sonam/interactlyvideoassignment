import React, { useState } from "react"
import { useSelector } from "react-redux"
import 'react-html5video/dist/styles.css'
import "./App.css"
import sidebutton from "./sidebutton.png"
import { hover } from "@testing-library/user-event/dist/hover"

const homeparentstyle={
  height:"100vh",
  display:"flex",
  justifyContent:"space-around"
}
const videostyle={
  width:"880px",
  position: "relative",
  top: "0",
  left: "0",
  border: "1px solid #000000",
}
const sidebuttonstyle={
  width:"150px",
  height:"60px",
  borderRadius:"8px",
  position: "absolute",
  top: "370px",
  left: "150px",
  border: "1px solid #000000",
  zIndex: '0',
  cursor:"pointer"
}

const childstyle2={
  width:"50%"
}

const buttonstyle1={
  width:"300px",
  height:"50px",
  marginTop:"200px",
  marginLeft:"100px",
  borderRadius:"33px",
  border: "none",
  backgroundColor:"rgb(231,231,231)",
  cursor:"pointer"
}

const buttonstyle={
  width:"300px",
  height:"50px",
  marginTop:"10px",
  marginLeft:"100px",
  borderRadius:"33px",
  border: "none",
  backgroundColor:"rgb(231,231,231)",
  cursor:"pointer"
}
const button={
  margin:"-5px 45px -22px 14px",
  width:"30px",
  height:"30px",
  borderRadius:"50px",
  backgroundColor:"#7D00FE",
  cursor:"pointer",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}

const buttonstyle2={
  width:"300px",
  height:"50px",
  marginTop:"200px",
  marginLeft:"10px",
  borderRadius:"10px",
  border: "none",
  backgroundColor:"#7D00FE",
  color:"white",
  textAlign:"center",
  cursor:"pointer",
 
}
function App() {
  const state=useSelector(state=>state)
  const [videosource,setVideosource] = useState(state.state.video[0]);
  const [flag,setFlag]=useState(true);
  
  console.log(state)

  return (

    <div style={homeparentstyle} >
      <div>
        <video src={videosource} controls autoPlay loop  style={videostyle}/>
        <img src={sidebutton}  style={sidebuttonstyle}  />
      </div>
      {flag ? <div style={childstyle2}>

          <div>
            <button style={buttonstyle1} onClick={()=>{setVideosource(state.state.video[0],setFlag(false))}}>
              <div style={button}>A</div>
              Campaign Structure</button>
          </div>

          <div>
            <button style={buttonstyle} onClick={()=>{setVideosource(state.state.video[1],setFlag(false))}}>
              <div style={button}>B</div>
              Learn Facebook basics</button>
          </div>
          
          <div>
            <button style={buttonstyle} onClick={()=>{setVideosource(state.state.video[2],setFlag(false))}}>
              <div style={button}>C</div>
              3rd choice
            </button>
          </div>
          
      </div>
       :
       <div style={buttonstyle2}>
          <div>download  "Campaign Structure</div>
          <div>Guide"</div>
       </div>
       
       }
      
    </div>

   
  );
}

export default App;
