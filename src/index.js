import checkPkg from './checkPkg';
import installPkg from './installPkg';

const npmCheckInstall = (pkgName, options = {}) => {
  if (!pkgName) throw new Error(`Package Name is required!`);

  checkPkg(
    pkgName,
    options,
    () => {}, // onFound
    (pkgName, options) => { // onNotFound
      console.log(`Package "${pkgName}" not found.`);
      installPkg(pkgName, options);
    }
  );
};

module.exports = npmCheckInstall;
