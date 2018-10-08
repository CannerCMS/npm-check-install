# npm-check-install

Check the specific package already installed or not. If yes, do nothing or install that package

## Installation

```sh
$ npm install --save npm-check-install
```

## Usage

```
const npmCheckInstall = require('npm-check-install');

npmCheckInstall('antd', { cwd: 'PATH TO CHECK AND INSTALL' // default process.cwd() })
  .then((hasFound) => {
    // do stuff
  })
  .catch((err) => {
    console.error('ERROR: ', err);
  });
```

## License

MIT © [Canner](http://github.com/canner)

<a href="https://canner.io">
  <img src="https://user-images.githubusercontent.com/26116324/37811196-a437d930-2e93-11e8-97d8-0653ace2a46d.png"/>
</a>
