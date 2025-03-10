const joi = require('joi');

const schemas = {
    register: joi.object({
        fullname: joi.string().min(3).max(20).required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    }),

    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    }),
};


function validateUser(req, res, next){
    let schema;

    if(req.method === "POST" && req.path === '/register'){
        schema = schemas.register;
    }
    else if(req.method === "POST" && req.path === '/login'){
        schema = schemas.login;
    }
    else{
        return res.status(400).send("404: Page not found");
    }
    const {error} = schema.validate(req.body);
    if(error)
    {
        return res.render('index', {error: error.details[0].message});
    }

    next();
}

module.exports = validateUser;