const path = require("path");
const userControllers= require(path.join(__dirname,"../controllers/user.controller"));


module.exports=app=>{
    app.post('/api/register',userControllers.register);
    app.post('/api/login',userControllers.login);
}
