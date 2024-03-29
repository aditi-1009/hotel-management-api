/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('verification_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'verification_type'
  });
};
