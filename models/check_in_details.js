/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('check_in_details', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    booking_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    room_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: true
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: true
    },
    billing_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discount_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    advance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'check_in_details'
  });
};
