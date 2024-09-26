
let mongoose = require('mongoose');

const { Schema } = mongoose;

export const personSchema = new Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
})