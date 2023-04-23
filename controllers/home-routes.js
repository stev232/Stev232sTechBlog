const router = require('express').Router();
const { BlogPost } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findAll({ });

    const blogs = dbBlogData.map((blog) =>
    blog.get({ plain: true })
    );
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/blog/:id', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findByPk(req.params.id, { });

    const blog = dbBlogData.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
