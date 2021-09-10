const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/UsersControllers')
const UsersInstance = new UsersControllers()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', (req,res) => UsersInstance.addUser(req,res));


module.exports = router;
