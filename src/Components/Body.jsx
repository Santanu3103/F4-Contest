import React  ,{useState}from 'react';
import './Body.css';



function Body() {

    const [data,setData] = useState(null);
    const [display,setDisplay] = useState(true);

    function getValue()
    {
      const inputItemsIds = ["name", "email", "password", "confirm_password"];

      let values = inputItemsIds.map( id => document.getElementById(id).value);

      let flag = values.every(value=> value != "");   
     let warning = document.getElementById("error");

     if (flag) {
       for(let key in values) {
            
            if(!values[1].toLowerCase().match(/[a-z0-9]+@[a-z]+\.[a-z]{3}/))
                {
                    
                    setData("please enter a valid email id");
                    warning.style.color = "red";
                
                }else if(values[2]!==values[3] ){
                    setDisplay(false);
                    setData("Your password doesn't match");
                    warning.style.color = "red";
                
                }else{
                    
                    setData("Sucessfully Signed up now click to go back");
                let sucess = document.getElementsByClassName("heading")[0];
                    sucess.style.color = "Green";
                    setDisplay(false);
                }
            } }else{

                        setData("Error: All fields are mandetory");  
                        warning.style.color = "red";
                        
                    }      
    }

    function goBack() {
        setDisplay(true);
    let sucess = document.getElementsByClassName("heading")[0];
         setData("");  
        sucess.style.color = "#ffffff";
    }
    return (
            display ?<div className="main ">
                    <div className="container ">
                    <h1 className="heading">Signup</h1>
                    <input  type="text" id = 'name' placeholder="Name" />
                    <input type="email"    id='email' placeholder="Email"/>
                    <input type="password" id='password' placeholder="Password"/>
                    <input type="text" id='confirm_password' placeholder="Confirm Password"/>
                    <p id="error">{data}</p>
                    <button id="submit" onClick={getValue} >Signup</button>
                    </div>
                    </div> 

                  : <div className="main ">
                        <div className="container "> 
                        <h1 className="heading" onClick={goBack}>{data}</h1>
                        </div>
                    </div>          
         )
     }

export default Body;