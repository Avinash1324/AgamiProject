const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Admin = require('./db/Admin');
const Time = require('./db/Timesheet');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/signup', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    console.log(result);
    resp.send(result)
})
app.post('/admin', async (req, resp) => {
    let admin = new Admin(req.body);
    let result = await admin.save();
    console.log(result);
    resp.send(result)
})

app.post('/login', async (req, resp) => {

    let result = await User.findOne(req.body).select('-password')
    console.log(result);
    resp.send(result);

})
app.post('/adminlogin', async (req, resp) => {
    let result = await Admin.findOne(req.body).select('-password')
    console.log(result);
    resp.send(result);
})


app.post('/entry',async(req,resp)=>{
    let time= new Time(req.body);
    let result= await time.save();
    resp.send(req.body);
})
app.get('/entry' ,async(req,resp)=>{
    let timesheetresult = await Time.find();
    if ( timesheetresult.length > 0) {
        resp.send(timesheetresult);
    }
    else {
        resp.send("No Result found");
    }
    
})


app.listen(5000, () => {
    console.log('Server is running at 500')
})

