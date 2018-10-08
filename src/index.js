import checkPkg from "./checkPkg";
import installPkg from "./installPkg";

const npmCheckInstall = (pkgName, options = {}) => {
  return new Promise(async (resolve, reject) => {
    if (!pkgName) reject(`Package Name is required!`);

    try {
      const hasFound = await checkPkg(pkgName, options);
      if (!hasFound) {
        console.log(`Package "${pkgName}" not found.`);
        await installPkg(pkgName, options);
      }
      resolve(hasFound);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = npmCheckInstall;
