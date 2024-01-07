const sayHello = (name, greeting) => {
  greeting = greeting || 'Hello';
  name = name || 'World';

  return `${greeting} ${name}`;
};

module.exports = {
  sayHello,
};
