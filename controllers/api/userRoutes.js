const router = require('express').Router();
const { User } = require('../../models/user');

// This route uses async/await with '.catch()' for errors

router.get('/', async (req, res) => {
  // find all users
  
  try {

    const userData = await User.findAll();
    res.status(200).json(userData);

  } catch(err) {

    console.log(err)
    res.status(500).json(err)
  }
  

});

router.post('/', async (req, res) => {
  try {

    const userData = await User.create(req.body);
    res.status(200).json(userData);

  } catch (err) {

    console.log(err)
    res.status(400).json(err);
    
  }
});

module.exports = router;