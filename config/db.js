var Sequelize = require('sequelize')
var fs        = require("fs")
var path      = require("path")

var dev  = {
	connectionLimit : 10,
	host            : 'localhost',
	user            : 'root',
	password        : '',
	database        : 'hotel_management',
	waitForConnection: true
}

var mysql = dev

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password,{
	host: mysql.host,
	port:3306,
	dialect:'mysql',
	logging : false,
	define: {
		underscored: true,
		freezeTsableName: true, //use singular table name
    	timestamps: false  // I don't want timestamp fields by default
	  },
	dialectOptions: {
		useUTC: false, //for reading from database
		dateStrings: true,
		// typeCast: true

		typeCast: function (field, next) { // for reading from database
			if (field.type === 'DATETIME') {
			return field.string()
			}
			return next()
		},
	},
	// dateString : true,
	timezone: '+05:30'
})



const db = {}//db will contain all the relations and will be used in controllers

db.Sequelize = Sequelize
db.sequelize = sequelize

/**
 * Example
 * db.a = require(modelPath+'/a.js')(sequelize,Sequelize)
 * db.b = require(modelPath+'/b.js')(sequelize,Sequelize)
 *
 * Defining Relation
 * db.a.hasMany(db.b, {as : 'b'})
 * db.b.belongsTo(db.a)
 */

function requireModel(Model){
    return require("../models/"+Model)(sequelize,Sequelize)
}
const model = path.resolve(__dirname, '../models');

fs.readdirSync(model).forEach(file => {
	file = file.slice(0, -3) // this will remove .js extension
  	db[file] = requireModel(file)
})

db.booking.belongsTo(db.customer)

db.room_mapping.belongsTo(db.booking)
db.room_mapping.belongsTo(db.room_type)



module.exports = db