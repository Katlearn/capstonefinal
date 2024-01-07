import express  from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
const app = express()
app.use (cors({
  origin:["http://localhost:3001"],
  methods:["POST,GET"],
  credentials:true
}));
app.use (express.json());


const connection = mysql.createConnection({
  host: "localhost", 
  port: 3306,        
  user: "user",      
  password: "password123",      
  database: "first_database" 

  
});
app.get('/user',function(request,response){ try{
  const header = request.headers;
  const authorizationHeader= header.authorization;
  if(authorizationHeader!== 'undefined'){
    console.log('token: ', authorizationHeader)
    
    const token= authorizationHeader.split(' ')[1];
    const decode=jwt.verify(token,'shhhhhhh');
    console.log('decode token:',decode)
    response.json({'success':true,data:decode});
  }
}catch (err){
  response.json({'success':false, err})
}


})



//------new registration w/ validation-----------
 app.post('/register', function (request, response) {
    
  const emailFromFrontEnd = request.body.email;
  const passwordFromFrontEnd = request.body.password;

  console.log('emailFromFrontEnd: ', emailFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);

  // Check if the username already exists in the database
  const checkQuery = `SELECT * FROM first_database.users WHERE emailAddress = "${emailFromFrontEnd}"`;

  connection.query(checkQuery, function (error, rows) {
      if (error) throw error;

      // If a user with the same username already exists, send an error response
      if (rows.length > 0) {
          response.json({"error": "Email-address already exists"});
      } else {
          // Username is unique, hash the password and insert the new user
          bcrypt.hash(passwordFromFrontEnd, 10, function(error, hashedPassword){
              if (error) throw error;
              console.log('Hashed password: ', hashedPassword);

              const insertQuery = `INSERT INTO first_database.users (emailAddress, password) VALUES ("${emailFromFrontEnd}", "${hashedPassword}")`;

              connection.query(insertQuery, function (error, result) {
                  if (error) throw error;
                  console.log("result:",result);
                  response.json({"success": "User registered successfully"});
              });
          });
      }
  });
});



  




//logIn//

app.post('/login', function (request, response) {
  const emailFromFrontEnd = request.body.email;
  const passwordFromFrontEnd = request.body.password;

  console.log('emailFromFrontEnd: ', emailFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);

  const myQuery = `SELECT * FROM first_database.users
  where emailAddress = "${emailFromFrontEnd}"`;

    //testing if existing  
    connection.query(myQuery, function (error, result) {
      if (error) throw error; 
      console.log("id result from database: ", result);

      if(result && result[0] && result[0].id){
        const hashedPassword = result[0].password;//check if id and pass


      console.log('password from frontend: ', passwordFromFrontEnd);
      console.log('hashedPassword: ', hashedPassword);
      const check = bcrypt.compareSync(passwordFromFrontEnd, hashedPassword); //check if same
      //token
      if(check){
        const token = jwt.sign({id:result[0].id,username:emailFromFrontEnd},'shhhhhhh', { expiresIn: '1h' });
        response.cookie ('token',token);
        console.log('token: ', token)
        response.send({"success": true, token: token})
      }else{
        response.send({"success": false, error: "invalid credentials"})
      }

      
      console.log('check password: ', check);
      
    }
    else{
      response.send({"success": false, "error": "invalid credentials"})
    }

    });

  
})



//INQUIRY

app.post('/venue',function(request,response){
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const inputOrg= request.body.inputOrg;
  const flexradio1= request.body.flexradio1;
  const flexradio2= request.body.flexradio2;
  const Event=request.body.Event;
  const email = request.body.email;
  const contact=request.body.contact;
  const address= request.body.address;
  const address2=request.body.address2;
  const city= request.body.city;
  const state= request.body.state;
  const zipcode= request.body.zipcode;
  const eventDate=request.body.eventDate;
  const appt = request.body.appt;
  const exit = request.body.exit;
  const guestNumber = request.body.guestNumber;
  const catererYes = request.body.catererYes;
  const catererNo= request.body.catererNo;
  const message = request.body.message;


    console.log('fistname:',firstName);
    console.log('lastname:',lastName);
    console.log('inputOrg:',inputOrg);
    console.log('flexradio1:',flexradio1)
    console.log('flexradio2:',flexradio2);
    console.log('event:',Event);
    console.log('email:',email);
    console.log('contact:',contact);
    console.log('address:',address);
    console.log('address2:',address2);
    console.log('city:',city);
    console.log('state:',state);
    console.log('zipcode:',zipcode);
    console.log('eventDate:',eventDate);
    console.log('appt:',appt);
    console.log('exit:',exit);
    console.log('guest:',guestNumber);
    console.log('catereYes:',catererYes);
    console.log('catererNo:',catererNo);
    console.log('message:',message);


    const insertQuery = `INSERT INTO first_database.inquiry_table (firstName,lastName,organization,profit,nonprofit,event,email,contact,address,address2,city,state,zipcode,eventdate,appt,exitTime,guestNumber,catererYes,catererNo,message) VALUES ("${firstName}","${lastName}","${inputOrg}","${flexradio1}","${flexradio2}","${Event}","${email}","${contact}","${address}","${address2}","${city}","${state}","${zipcode}","${eventDate}","${appt}","${exit}","${guestNumber}","${catererYes}","${catererNo}","${message}")`;

    connection.query(insertQuery,function(error,result) {
      if (error) throw error;
      console.log('result:',result);
      response.json({"success":"inquiry sent"});
    })
})

//contact_us

app.post('/contact',function(request,response){
  const fe_firstName = request.body.fe_firstName;
  const fe_lastName = request.body.fe_lastName;
  const fe_contact=request.body.fe_contact;
  const fe_email=request.body.fe_email;
  const fe_address= request.body.fe_address;
  const fe_address2=request.body.fe_address2;
  const fe_city= request.body.fe_city;
  const fe_state= request.body.fe_state;
  const fe_zipcode= request.body.fe_zipcode;
  const fe_message= request.body.fe_message;

    console.log('fistname:',fe_firstName);
    console.log('lastname:',fe_lastName);
    console.log('contact:',fe_contact);
    console.log('email:',fe_email);
    console.log('address:',fe_address);
    console.log('address2:',fe_address2);
    console.log('city:',fe_city);
    console.log('state:',fe_state);
    console.log ('zipcode:',fe_zipcode);
    console.log('message:',fe_message);


    const insertQuery = `INSERT INTO first_database.contact_us (firstName,lastName,contact,email,address,address2,city,state,zipcode,message) VALUES ("${fe_firstName}","${fe_lastName}","${fe_contact}","${fe_email}","${fe_address}","${fe_address2}","${fe_city}","${fe_state}","${fe_zipcode}","${fe_message}")`;

    connection.query(insertQuery,function(error,result) {
      if (error) throw error;
      console.log('result:',result);
      response.json({"success":"message sent"});
    })
})




console.log('STARTING EXPRESS SERVER')
connection.connect(function(error) {
    if (error) throw error; 
    console.log('MYSQL DB CONNECTION SUCCESS!')
    app.listen(3000)
    console.log('App is now running on port: ', 3000)
});



