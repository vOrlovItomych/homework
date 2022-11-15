console.log(process.env.MODULE_NAME);

if(process.env.MODULE_NAME === 'test') {
    const say = import('./consoleHi.js').then(data => console.log(data));
   console.log(say);
 } else {
    console.log('MODULE_NAME not equal test');
 }

