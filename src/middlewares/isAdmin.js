import options from "../config.js";

const admin = options.admin;

const isAdmin = (req, res, next) =>{
    if(admin){
        next()
    } else{
        res
        .status(401)
        .send(`error: -1, rute ${req.path} and method ${req.method} not authorized.`)
    }
}

export default isAdmin;