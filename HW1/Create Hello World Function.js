/**
 * @return {Function}
 */
var createHelloWorld = function(str) {
    return function() {
        return "Hello World";
    }
};


 const f = createHelloWorld();
  f(); // "Hello World"

