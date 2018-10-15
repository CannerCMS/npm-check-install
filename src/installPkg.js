import child_process from "child_process";
import { info } from "./utils";
const exec = child_process.exec;

const installPkg = (pkgName, { cwd = process.cwd() }) => {
  return new Promise((resolve, reject) => {
    console.log(info(`Installing "${pkgName}"...`));
    exec(`npm install --save ${pkgName}`, { cwd }, (error, stdout) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(info(`Package ${pkgName} has been installed! ${stdout}`));
        resolve();
      }
    });
  });
};

export default installPkg;
