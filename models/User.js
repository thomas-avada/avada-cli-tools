
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paginate = require("../helpers/paginate");

/**
 * User Schema for managing information in mongodb
 *
 * @type {Schema}
 */
const userSchema = new Schema({
}, { timestamps: true });

userSchema.plugin(paginate);

module.exports = mongoose.model("User", userSchema);
