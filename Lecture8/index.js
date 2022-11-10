/*function getDataFromDb(dataFromDB, callback) {
    callback(dataFromDB);

    return dataFromDB;
}

function clearNulls(obj) {
    for (const key in obj) {
        if (obj[key] === null) {
            delete obj[key];
        }
    }
}

console.log(getDataFromDb({
    key: null,
    number: 5
}, clearNulls));

function hellCallback(addOne) {
    let sum = 0;
    addOne(sum, function (second) {
        second += 2;
        sum = second;
        console.log(sum);
    });

    return sum;
}

function addOne(first, addTwo) {
    first += 1;
    console.log(first);
    addTwo(first);
}
console.log('Function: ', hellCallback(addOne));

function addOne(first, addTwo) {
    first += 1;
    console.log(first);
    addTwo(first);
}
console.log('Function: ', hellCallback(addOne));

function hellObjCallback(nullsAndObj) {
    let obj = {
        key: null,
        number: 5,
        obj: {

        }
    };

    nullsAndObj(obj, function (testObj) {
        for (const key in testObj) {
            if (typeof testObj[key] === 'object') {
                delete testObj[key];
            }
        }
    })

    return obj;
}

function clearNullsAndCallCallback(obj, callback) {
    for (const key in obj) {
        if (obj[key] === null) {
            delete obj[key];
        }
    }

    callback(obj);
}

console.log('Obj', hellObjCallback(clearNullsAndCallCallback));

const firstPromise = new Promise(function (resolve, reject) {
    const age = 15;

    if (age > 15) {
        resolve('ok');
    } else {
        reject(new Error('You younger than 15'));
    }
});

console.log(firstPromise.then(data => console.log(data)).catch(err => console.log(err)).finally(() => console.log('Data is ready')));

function hellCallbackNumbers(addOne = function (sum, addTwo) {
    sum += 1;
    addTwo(sum);
}) {

    return new Promise((resolve, reject) => {
        let sum = 0;
        addOne(sum, function (sum) {
            sum += 2;
            resolve(sum);
        });
    });
}
console.log(hellCallbackNumbers().then(data => console.log('Info Promise: ', data)));
*/
async function returnOne() {
    return 1;
}

console.log(returnOne().then(data => console.log(data)));

async function calculate() {
    const one = await returnOne();
    console.log(one, 'In calculate');

    return one + 100;
}

console.log(calculate().then(data => console.log('Data', data)));

(async function() {
    console.log('Call yourself', await calculate())
})();

function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }

  async function loadJson(url) {
    const response = fetch(url).then(data => {
        if (response.status == 200) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
    });

  }

Promise.all([loadJson,calculate ]);

