exports.command = 'contributor <command>';
exports.desc = 'Các command liên quan đến contributor';
exports.builder = function(yargs) {
  return yargs.commandDir('contributor-cmds');
};
exports.handler = function(argv) {};
