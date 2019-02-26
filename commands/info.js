const chalk = require('chalk');

exports.command = 'info';
exports.desc = 'Thông tin về Coders.Tokyo';
exports.builder = {};
exports.handler = function(argv) {
  console.log(chalk.red('Thông tin về Coders.Tokyo'));
  console.log('============');
  console.log(chalk.cyan('Founder:'), 'Thịnh Phạm');
  console.log(chalk.cyan('Ngày thành lập:'), '17/05/2018');
  console.log(chalk.cyan('Website:'), 'https://coders.tokyo');
  console.log(chalk.cyan('School:'), 'http://school.coders.tokyo');
  console.log(chalk.cyan('Facebook:'), 'http://fb.com/coders.tokyo');
  console.log(chalk.cyan('Youtube:'), 'http://youtube.com/c/CodersTokyo');
  console.log(
    chalk.cyan('Instagram:'),
    'https://www.instagram.com/coders.tokyo/'
  );
};
