function receivesAFunction(callback) {
  callback(); // Fire up that callback function!
}

function returnsANamedFunction() {
  return function namedFunction() {
    // Keepin' it named and unnamed at the same time, y'know?
  };
}

function returnsAnAnonymousFunction() {
  return () => {
    // No name, no strings attached, just an anonymous function!
  };
}
