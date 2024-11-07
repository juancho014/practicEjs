var express = require('express');
var router = express.Router();
const{home,contactos,about,editNote,renderLguin}=require('../controllers/index.controllers')

/* GET home page. */
router.get('/', home);

router.get('/contactos',contactos);

router.get('/about',about);

router.get('/edit/note',editNote);

router.get('/loguin',renderLguin)

module.exports = router;
