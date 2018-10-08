import child_process from 'child_process';
const ora = require('ora');
const exec = child_process.exec;

const installPkg = (pkgName, {cwd = process.cwd()}) => {
  const spinner = ora(`Installing "${pkgName}"...`).start();
  exec(`npm install ${pkgName}`, {cwd}, (error, stdout) => {
    if (error) spinner.fail(error);
    else spinner.succeed(`Package ${pkgName} has been installed! ${stdout}`);
  });
}

export default installPkg;