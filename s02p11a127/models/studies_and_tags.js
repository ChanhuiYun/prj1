/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studies_and_tags', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'studies',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id'
      }
    }
  }, {
    tableName: 'studies_and_tags'
  });
};
