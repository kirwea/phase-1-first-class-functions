function receivesAFunction(callback) {

    callback();
 }


   function returnsANamedFunction(name) {
      return function named() {
        console.log('A named funtion');
      }
      }


  function returnsAnAnonymousFunction() {
      return function () {
        console.log('Anonymous')
      };
   }
