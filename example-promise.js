// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Ho Chi Minh',function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Ho Chi Minh').then(function (temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

function isNumber(x) {
    if (typeof x === 'number') {
        return true;
    } 
    return false;
}

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (isNumber(a) && isNumber(b)) {
            resolve(a + b);
        } else {
            reject('Error');
        }
    });
}

addPromise(1, 3).then(function(sum) {
    console.log('sum: ', (sum));
}, function(err) {
    console.log('promise error: ', err);
});