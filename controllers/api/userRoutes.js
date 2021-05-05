const router = require('express').Router();
const  User  = require('../../models/User');

// This route uses async/await with '.catch()' for errors

router.get('/', async (req, res) => {
  // find all categories
  
  try {

    const userData = await User.findAll();
    res.status(200).json(userData);

  } catch(err) {

    console.log(err)
    res.status(500).json(err)
  }
  

});

// This route uses async/await with try/catch for errors

router.post('/', async (req, res) => {
  try {
    const UserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;