import child_process from 'child_process';
const exec = child_process.exec;
const MAX_BUFFER_SIZE = 1024 * 10000;

const checkPkg = (pkgName, options, onFound, onNotFound) => {
  exec('npm ls --json --parseable --depth=0', { cwd: options.cwd || process.cwd(), maxBuffer: MAX_BUFFER_SIZE},(_, stdout) => {
    let pkgJSON;
    try {
      pkgJSON = JSON.parse(stdout);
    } catch(err) {
      throw new Error('Parsing error "npm ls --json..."', err);
    }

    if (pkgJSON.dependencies && pkgJSON.dependencies[pkgName]) onFound(pkgName, options);
    else onNotFound(pkgName, options);
  });
}

export default checkPkg;
