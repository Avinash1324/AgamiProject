const mongoose=require('mongoose');
const timesheetSchema=mongoose.Schema({
    name:String,
    projectName:String,
    date:String,
    time:String
})
module.exports=mongoose.model('timesheets',timesheetSchema);