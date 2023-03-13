const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedRecipe extends Model {}

SavedRecipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER, 
      references: {
        model:"recipe",
        key:"id"
      }
    },
    user_id: {
        type: DataTypes.INTEGER, 
        references: {
          model:"user",
          key:"id"
        }
      }
  },

  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: 'savedRecipe'
  }
);

module.exports = SavedRecipe;
