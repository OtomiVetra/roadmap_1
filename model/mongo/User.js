const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CompanySchema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String
});

const AddressSchema = new Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: {
    lat: Number,
    lng: Number
  }
});

const UserSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String,
  company: CompanySchema,
  address: AddressSchema
});

const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;