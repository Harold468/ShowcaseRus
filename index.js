const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const path = require("path")
// app.use(dotenv.config())
app.use(cors())

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT
const email_password = process.env.email_password
const email_host = process.env.email_host
const owner_email = process.env.owner_email

const nodemailer = require('nodemailer');

const send_email=async(subject=`Your order was received.`,to_email,name,phone,product,product_parts)=>{
  const mailOptions = {
    from: email_host,
    to: to_email,
    subject:subject,
    html: `<Html>
    <p>Email received.</p>
    ${to_email===owner_email?``:`Our team will respond within the shortest possible time with updates in your order.<br/> `}
    
    <p>Name: ${name}</p>
    <p>Email: ${to_email}</p>
    <p>Phone: ${phone}</p>
    <p>Product ordered: ${product}</p>
    <p>Cutomization: ${JSON.stringify(product_parts)}</p>
    <br/>
    <p style="margin-right:"auto";>Regards</p>
    <p style="margin-right:"auto";>ShowcaseRus Co. Ltd. </p>
    </Html>`
  };
  
  
  

await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 

}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email_host,
    pass: email_password,
  }
});

app.get('/',((req,res)=>{
  res.sendFile(path.join(__dirname,"dist/index.html"))
}))

app.get('/testing_data_info',((req,res)=>{
  res.send("Working")
}))

app.get('*',((req,res)=>{
  res.sendFile(path.join(__dirname,"dist/index.html"))
}))

app.post('/email',(async(req,res)=>{
    try{


        await send_email(subject=`Your order from Showcase R us`,req?.body.email,req?.body.name,req?.body.phone,req?.body.product,req?.body.product_parts)


        await send_email(subject=`Order was received from ${req?.body.email}`,owner_email,req?.body.name,req?.body.phone,req?.body.product,req?.body.product_parts)
     
    
    
        res.status(201).json({"message":"email sent successfully"})
    }catch(e){
        res.status(400).send(`${e}`)
    }


}))


// app.get('/')
app.listen(PORT,()=>{
    console.log("Server running....")
})