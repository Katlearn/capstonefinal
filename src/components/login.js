import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'




function Login() {
  const loginOnclick=function(){
    

   const submitBtn=document.getElementById('login')
    submitBtn.onclick=function(){
        const email=document.getElementById('email')
        const password=document.getElementById('password')
        fetch(`${process.env.REACT_APP_API_URL}/login`,{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        }) .then(function(result){
            return result.json()
        }).then(function(result){
                console.log('result: ', result)
                localStorage.setItem('token',result.token);
               
            if (result.success){
            alert('success login')
            window.location.href = 'http://localhost:3001/'
           } else{
              alert('invalid credentials')
            }
          })
          email.value="";
          password.value="";
    }
  }
  return ( 
    <div>
      <div className="wrapper bg-warning">
        <div className="container main">
            <div className="row page">
               <div className="col-md-6 side-image">
               </div>
               <div className="col-md-6 right">
                   <div className="input-box">
                     <header>Log in</header>
                   <div className="input-field d-flex flex-row-reverse">
                     <input type="text"className="input mx-2 mb-2" id="email"></input>
                     <label htmlFor="email" >Email</label>
                   </div>
                   <div className="input-field d-flex flex-row-reverse">
                     <input type="password"className="input mx-2 mb-2" id="password"></input>
                     <label htmlFor="password" >Password</label>
                   </div>
                   <div className="input-field text-center">
                     <button id="login" className="submit btn btn-warning mt-3 text-center px-5" onClick={loginOnclick}>Log in
                     </button>
                   </div>
                   <div className="sign-in">
                   <span>Don't have an account yet? <Link to='/Register'>Register</Link></span>
                   </div>         
                </div>
             </div>
        </div>
    </div>
    </div>
    
    </div>
  );
}

export default Login;
