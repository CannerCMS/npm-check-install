# npm-check-install

Check if the specific npm package has already been installed or not. If it has been installed, do nothing; Otherwise, install it.

## Installation

```sh
$ npm install --save npm-check-install
```

## Usage

```js
const npmCheckInstall = require('npm-check-install');

npmCheckInstall('antd', { cwd: 'path to check and install' // default process.cwd() })
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
