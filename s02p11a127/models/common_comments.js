/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('common_comments', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    writer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'common_posts',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'common_comments'
  });
};
