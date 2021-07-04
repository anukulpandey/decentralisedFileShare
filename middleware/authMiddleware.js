const jwt = require('jsonwebtoken');
const User = require('../models/users');

const requireAuth = (req, res, next) => {
  const token = req.cookies;
  console.log(req.cookies)
  if (token) {
    jwt.verify(token.jwt, 'secret key', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/signin');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/signin');
  }
};

const lrMiddleware = (req,res,endpoint)=>{
  if (req.cookies.jwt){
      jwt.verify(req.cookies.jwt, 'secret key', (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            res.redirect(`/${endpoint}`);
          } else {
            console.log(decodedToken);
            res.redirect('/dashboard');
          }
      });
  }
}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret key', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth , lrMiddleware , checkUser};