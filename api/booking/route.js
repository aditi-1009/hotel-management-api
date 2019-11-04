var express = require('express');
var router = express.Router();

var controller = require('./controller');


router.route('/')
      .get(controller.getBookingDetails)
      .post(controller.createBooking)

router.route('/room-type')
      .get(controller.getRoomTypes)
      
router.route('/:id')
      .get(controller.getBookingById)



module.exports = router