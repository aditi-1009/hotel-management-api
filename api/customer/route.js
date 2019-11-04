var express = require('express');
var router = express.Router();

var controller = require('./controller');


router.route('/')
      .post(controller.createCustomer)

router.route('/:id')
        .get(controller.getCustomerById)




module.exports = router