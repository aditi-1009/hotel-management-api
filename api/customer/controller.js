var db = require('../../config/db');
var messages = require('../../config/messages').Messages

module.exports = {
    createCustomer,
    getCustomerById
}


function createCustomer(req,res){
    let data = req.body
    console.log(data)
    req.checkBody('name', 'name is required').notEmpty()
    req.checkBody('phone_number', 'phone number is required').notEmpty()
    // if(req.body.email){
    //     req.checkBody('email','email format invalid').isEmail()
    // }
      const errors = req.validationErrors()
      if(errors){
        res.status(400)
        res.json(errors)
      }
      else{
          return db.sequelize.transaction(t =>{
              let customer = {}
              customer.name = data.name
              customer.phone_number = data.phone_number
              customer.email = data.email
              customer.address = data.address
              customer.date_added = Date()
              return db.customer.create(customer,{transaction : t})
          })
          .then(result =>{
              res.status(200)
              res.json({msg : messages.customerCreated})
          })
          .catch(Error =>{
              res.status(500)
              res.json(Error)
          })
      }
}

function getCustomerById(req,res){
    return db.customer.find({
        where : {
            id : req.params.id
        }
    })
    .then(result =>{
        res.json(result)
    })
}