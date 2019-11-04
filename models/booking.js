/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
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
    advance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'booking'
  });
};
