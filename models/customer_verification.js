/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_verification', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    verification_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    verification_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    valid_upto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'customer_verification'
  });
};
