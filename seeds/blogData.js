const { BlogPost } = require('../models');

const blogData = [
  {
    title: 'Blog site',
    content: 'This is certainly is a website!',
    date_created: 'April 17, 2021 07:00:00',
    user_id: 1,
  },
  {
    title: 'Blog site 2',
    content: 'It is still a website!',
    date_created: 'April 18, 2021 07:00:00',
    user_id: 1,
  },
  {
    title: 'Original post',
    content: `There isn't a single original post here!`,
    date_created: 'April 19, 2021 07:00:00',
    user_id: 2,
  },
  {
    title: 'Blog site 3',
    content: `Bullies can't stop me from being me`,
    date_created: 'April 20, 2021 07:00:00',
    user_id: 1,
  },
];

const seedBlog = () => BlogPost.bulkCreate(blogData);

module.exports = seedBlog;