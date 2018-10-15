import child_process from "child_process";
const ora = require("ora");
const exec = child_process.exec;

const installPkg = (pkgName, options) => {
  const npmOpt = options.global ? "-g" : "--save";
  return new Promise((resolve, reject) => {
    const spinner = ora(`Installing "${pkgName}"...`).start();
    exec(
      `npm install ${npmOpt} ${pkgName}`,
      { cwd: options.cwd },
      (error, stdout) => {
        if (error) {
          spinner.fail(error);
          reject(error);
        } else {
          spinner.succeed(`Package ${pkgName} has been installed! ${stdout}`);
          resolve();
        }
      }
    );
  });
};

export default installPkg;
