const {
  Command, flags
} = require("@oclif/command");
let { modelTemplate } = require("../../templates/model");
const {
  capitalize, writeFile
} = require("../../helpers");

class CreateCommand extends Command {
  async run () {
    const { flags } = this.parse(CreateCommand);
    const { name } = flags;
    const capitalizedName = capitalize(name);
    const lowercaseName = name.toLowerCase();
    modelTemplate = modelTemplate.replace(/#{modelName}/g, capitalizedName);
    modelTemplate = modelTemplate.replace(/%{modelName}/g, lowercaseName);
    writeFile(`../models/${name}.js`, modelTemplate, () => {
      this.log("New model " + flags.name + " has been created successfully");
    });
  }
}

CreateCommand.description = `Describe the command here
...
Extra documentation goes here
`;

CreateCommand.flags = {
  name: flags.string({
    char: "n", description: "name to print"
  })
};

module.exports = CreateCommand;
