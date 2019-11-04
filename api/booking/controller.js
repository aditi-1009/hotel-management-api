var db = require('../../config/db');
var messages = require('../../config/messages')

module.exports = {
    createBooking,
    getBookingDetails,
    getBookingById,
    getRoomTypes
}

function create(obj,t){
    return db.booking.create(obj,{transaction : t})
}
function createRoomMapping(obj,t){
    return db.room_mapping.create(obj,{transaction : t})
}

function createCheckIn(obj,t){
    return db.room_mapping.create(obj,{transaction : t})
}


function createBooking(req,res){
    console.log(req.body)
    let data = req.body
    return db.sequelize.transaction(async t =>{
        let booking = {}
        booking.customer_id = data.customer_id
        booking.check_in = data.check_in
        booking.check_out = data.check_out
        booking.advance = data.advance
        booking.agent_id = data.agent_id
        booking.date_added = Date()
        booking.date_modified = Date()
        booking.employee_id = data.employee_id
        booking.comment = data.comment
        booking.commission = data.commission
        let bookingDetail = await create(booking,t)
        console.log(bookingDetail)

        let roomMapping = {}
        roomMapping.booking_id = bookingDetail.id
        roomMapping.room_type_id = data.room_type_id
        roomMapping.no_of_rooms = data.no_of_rooms
        roomMapping.rate = data.rate
        roomMapping.plan = data.plan
        roomMapping.status = data.status
        let mapping = await createRoomMapping(roomMapping,t)
        console.log(roomMapping)

        let checkIn = {}
        checkIn.booking_id = bookingDetail.id
        checkIn.room_number = data.room_number
        checkIn.check_in = bookingDetail.check_in
        checkIn.check_out = bookingDetail.check_out
        checkIn.billing_name = data.billing_name
        checkIn.rate = mapping.rate
        checkIn.discount_id = data.discount_id
        checkIn.advance = bookingDetail.advance
        checkIn.agent_id = bookingDetail.agent_id
        checkIn.commission = bookingDetail.commission
        await createCheckIn(checkIn,t)
        
    })
    .then(result =>{
        res.status(200)
        res.json({msg : messages.bookingCreated})
    })
    .catch(Error =>{
        res.status(500)
        res.json(Error)
    })
}

function getBookingDetails(req,res){
    return db.booking.findAll()
    .then(result =>{
        res.json(result)
    })
}

function getBookingById(req,res){
    return db.booking.find({
        where : {
            id : req.params.id
        }
    })
    .then(result =>{
        res.json(result)
    })
}

function getRoomTypes(req,res){
    return db.room_type.findAll()
    .then(result =>{
        res.json(result)
    })
}