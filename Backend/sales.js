const mongoose = require('mongoose');
const {schema, model}= mongoose;

const salesSchema = new Schema({
    _id: 1209378000,
    date: 15-08-2022,
    item: nike shoe,
    price: $10,
    quantity: 2
},
const salesSchema = new Schema({
    _id: 122345677,
    date: 20-7-19,
    item: high heals,
    price: $50,
    quantity:3
},
const salesSchema = new Schema({
    _id: Number,
    date: Date,
    item: String,
    price: Number,
    quantity: Number
},

{
    versionKey: false // You should be aware of the outcome after set to false
})));

const sales = model('sales',salesSchema);
exports.sales = sales;
