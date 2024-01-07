const sayHello = (name = 'World', greeting = 'Hello') => {
  return `${greeting} ${name}`;
};

module.exports = {
  sayHello,
};
