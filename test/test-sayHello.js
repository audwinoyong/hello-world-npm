const test = require('tape');
const { sayHello } = require('../index.js');

test('sayHello()', (tape) => {
  let res = sayHello();
  tape.equals(res, 'Hello World');

  res = sayHello('', '');
  tape.equals(res, 'Hello World');

  res = sayHello('Jack');
  tape.equals(res, 'Hello Jack');

  res = sayHello('Tim', 'Goodbye');
  tape.equals(res, 'Goodbye Tim');

  tape.end();
});
