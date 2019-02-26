const chalk = require('chalk');
const data = require('./contributors.json');

exports.command = 'list';
exports.desc = 'Hiển thị tất cả contributors';
exports.builder = {};
exports.handler = function(argv) {
  console.log(chalk.red('Contributors'));
  console.log('============');
  console.log(
    data.contributors.map((item, index) => `${index + 1}. ${item}`).join('\n')
  );
  console.log(chalk.cyan('Album:', data.facebookAlbumUrl));
};
