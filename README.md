# Hello World for NPM

This is a test package to help learn about creating and
publishing NPM packages.

The package provides a function `sayHello(name, greeting)` which, by default,
prints 'Hello World' to the console.

## Install

```bash
npm install @audwinoyong/hello-world-npm
```

## Run Tests

```bash
npm test
```

## Use

```JS
const { sayHello } = require('@audwinoyong/hello-world-npm');

sayHello();
// Hello World

sayHello('Dave');
// Hello Dave

sayHello('Dave', 'Hi')
// Hi Dave
```

## License

This code is 100% free and open-source, under the [MIT license](LICENSE).
