import child_process from "child_process";
const ora = require("ora");
const exec = child_process.exec;

const installPkg = (pkgName, { cwd = process.cwd() }) => {
  return new Promise((resolve, reject) => {
    console.log(`Installing "${pkgName}"...`);
    exec(`npm install --save ${pkgName}`, { cwd }, (error, stdout) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(`Package ${pkgName} has been installed! ${stdout}`);
        resolve();
      }
    });
  });
};

export default installPkg;
