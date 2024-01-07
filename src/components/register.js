import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Register = () => {


  const registerOnclick=function(){
    const submitBtn=document.getElementById('submit')
    submitBtn.onclick=function(){
        const email=document.getElementById('email')
        const password=document.getElementById('password')
        fetch('http://localhost:3000/register',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        }).then(function(result){
          return result.json();

        }).then(function(result){
          console.log ('result:',result);

          if(result.success){
            alert(result.success);
          }else{
            alert(result.error);
          }
        })
       
    }
  }
  return (
    <>
    <div>
        <div className="wrapper bg-warning">
      <div className="container main">
        <div className="row page">
            
            <div className="col-md-6 side-image">


            </div>

            <div className="col-md-6 right">
              <div className="input-box">
                <header>Create account</header>
                  <div className="input-field d-flex flex-row-reverse">
                    <input type="email"className="input mx-2 mb-2" id="email" required autocomplete="off"></input>
                    <label for="email" >Email</label>
                  </div>
                  <div className="input-field d-flex flex-row-reverse">
                    <input type="password"className="input mx-2 mb-2" id="password" required ></input>
                    <label for="password" >Password</label>
                  </div>
                  <div className="input-field text-center">
                    <button id="submit" className="submit btn btn-warning mt-3 text-align-center px-5" value="Sign Up" onClick={registerOnclick}>Sign up
                    </button>
                    </div>
                  <div className="sign-in">
                    <span>Already have an account? <Link to='/login'>Go to Login</Link></span>
                  </div>
             </div>
            
          </div>
      </div>
    </div>
    </div>
      
    </div>
    
    
    
    
    
    </>
  )
}

export default Register
