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

router.get('/:id', async (req, res) => {

  //find user by id

  try {

    const userData = await User.findByPk(req.params.id);
    if (!userData) {

      res.status(404).json({ message: 'No user with this id!' });

      return;

    }

    res.status(200).json(userData);

  } catch (err) {

    res.status(500).json(err);

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

router.put('/:id', async (req, res) => {

  //edit current user

  try {

    const userData = await User.update(req.body, {

      where: {id: req.params.id,},

    });

    if (!userData[0]) {
      
      res.status(404).json({ message: 'No user with this id!' });

      return;
    }

    res.status(200).json(userData);

  } catch (err) {

    res.status(500).json(err);

  }
});

router.delete('/:id', async (req, res) => {

  //delete user

  try {

    const userData = await User.destroy({
      where: {id: req.params.id,},

    });

    if (!userData) {

      res.status(404).json({ message: 'No reader found with that id!' });

      return;
    }

    res.status(200).json(userData);

  } catch (err) {

    res.status(500).json(err);

  }
});

// this is user login authentication post, will uncomment with login form is build

// router.post('/login', async (req, res) => {

//   //user login post

//   try {
    
//     const userData = await User.findOne({ where: { email: req.body.email } });
    
//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }
    
//     const validPassword = await userData.checkPassword(req.body.password);
    
//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }
    
//     res.json({ user: userData, message: 'You are now logged in!' });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;