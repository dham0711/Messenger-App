const { Post } = require('../models');

const postData = [
  {
    title: 'blah',
    content: 'lorem lorem lorem lorem.',
    user_id: 1
    
  },
  {
    title: 'hello world',
    content: 'the quick brown fox jumped over the lazy dog.',
    user_id: 2
  },
  {
    title: 'Home Work Assignment',
    content: 'will i ever get my homework turned in? stay tuned to find out!',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;