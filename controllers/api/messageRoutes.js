const router = require('express').Router();
const { Message } = require('../../models/message');

// This route uses async/await with '.catch()' for errors

router.get('/', async (req, res) => {
  // find all messages
  
  try {

    const messageData = await Message.findAll();
    res.status(200).json(messageData);

  } catch(err) {

    console.log(err)
    res.status(500).json(err)
  }
  

});

router.get('/:id', async (req, res) => {

  //find message by id

  try {

    const messageData = await Message.findByPk(req.params.id);
    if (!userData) {

      res.status(404).json({ message: 'No message with this id!' });

      return;

    }

    res.status(200).json(userData);

  } catch (err) {

    res.status(500).json(err);

  }
});

router.post('/', async (req, res) => {
  try {

    const messageData = await Message.create(req.body);
    res.status(200).json(messageData);

  } catch (err) {

    console.log(err)
    res.status(400).json(err);
    
  }
});



module.exports = router;