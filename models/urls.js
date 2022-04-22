'use strict';
const {
  Model
} = require('sequelize');
var shortid = require('shortid');

module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Url.init({
    longUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'long url should not be null'},
        notEmpty: {msg: 'long url should not be empty'}
      }
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {msg: 'long url should not be null'},
        notEmpty: {msg: 'long url should not be empty'}
      }
    }
  }, {
    sequelize,
    tableName: 'urls',
    modelName: 'Url',
  });

  Url.beforeCreate(async (url, options) => {
    try {
      const oldUrl = await Url.findOne({ where : { shortUrl: url.shortUrl}});
      if(oldUrl) {
        url.shortUrl = shortid.generate();
      }
    } catch(error) {
      console.log('error', error);
    }
  })
  return Url;
};