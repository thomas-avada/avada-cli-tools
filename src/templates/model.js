const modelTemplate = `
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paginate = require("../helpers/paginate");

/**
 * #{modelName} Schema for managing information in mongodb
 *
 * @type {Schema}
 */
const %{modelName}Schema = new Schema({
}, { timestamps: true });

%{modelName}Schema.plugin(paginate);

module.exports = mongoose.model("#{modelName}", %{modelName}Schema);
`;

module.exports = {
    modelTemplate
};
