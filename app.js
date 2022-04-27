$(document).ready(function() {
    function aMessage(message) {
        console.log(message);
    }
    aMessage("Hello!");

    setTimeout(() => {
        aMessage("Hello again");
    }, 2000);

    function getWords() {
        console.log("Anno");
        setTimeout(() => {
            console.log("Pazuzu");
        }, 2000)
        setTimeout(() => {
            console.log("Futurama");
        }, 3000)
    }
    getWords();

    

    function countdown(num, callback) {
        if (num < 0) {
            console.log("Error: Countdown number below 0")
        } else if (num > 1) {
            console.log(num);
            setTimeout(() => {
                countdown((num-1), callback)
            }, 1000)
        } else if (num === 1) {
            console.log(num);
            callback();
        }
    }
    

    countdown(5, done);

    function done() {
        console.log(`Job's Done!`)
    }

    var lunchTime = true;


    function orderMeSomeFood(order) {
        return new Promise((resolve, reject) => {
            if(lunchTime === true) {
                const myOrder = {
                    lunch: "Pizza",
                    drink: "Beer"
                };
                resolve(myOrder);
            } else {
                var noLunch = Error("It's not lunchtime right now.")
                reject(noLunch);
            }
        });
    };

    // orderMeSomeFood(myOrder);

    // orderMeSomeFood().then(function(myOrder){
    //     return orderMeSomeFood(myOrder);
    // }).catch(function(err) {
    //     console.log(err);
    // })

    orderMeSomeFood().then((myOrder) => {
        return console.log(myOrder);
    }).catch((err) => {
        console.log(err)
    })

})