
function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    console.log(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye};
  export {sayHi as hi, sayBye as bye};
  