const router = require('express').Router();
const { User } = require('../models');


// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    // //if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    // Otherwise, render the 'login' template
    res.render('login.handlebars');
  });
  
  module.exports = router;