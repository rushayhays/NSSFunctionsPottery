//Make a pot function

//Define a function named buyClay. The function needs no parameters.
// It should return an object with no properties on it yet.
function buyClay() {
    const potteryObj = {};
    return potteryObj;
}

// Define a function named makePottery. You need to give it the empty object that
// buyClay produced, so it needs a single parameter to capture that value and use
// it. The function should perform the task of adding a new property named shape,
// and its value should be "Bowl". The function should then return the object after 
//the new property was added.

function makePottery(obj) {
    obj.shape = "Bowl";
    return obj;
}

//Define a function named bisqueFire. You need to give it the object that
// makePottery produced, so it needs a single parameter to capture that value
// and use it. The function should perform the task of adding a new property
// named readyForGlazing, and its value should be true. The function should then
// return the object after the new property was added.

function bisqueFire(obj) {
    obj.readyForGlazing = true;
    return obj;
}

//Define a function named glazePottery. You need to give it the object that
// bisqueFire produced, so it needs a single parameter to capture that value
// and use it. The function should check if the pottery has been bisque fired 
//already and is ready for glazing. If it has not, you should log the following
// message to the console.
//If the pottery has been bisque fired, the function should perform the task of
// adding a new property named glazing, and its value should be "Midnight Blue". 
//The function should then return the object after the new property was added.

function glazePottery(obj) {
    if(obj.readyForGlazing === true) {
        obj.glazing = "Midnight Blue"
        return obj;
    } else {
        return "Make sure you bisque fire the pottery before you glaze it."
    }

}

//Define a function named finalFiring. You need to give it the object that
// glazePottery produced, so it needs a parameter to capture that value and use
// it. It also needs to capture the temperature of the kiln, so it needs two 
//parameters. The function should perform the task of adding a new property 
//named cracked, and its value depend on the value of the temperature parameter. 
//If that value is higher than 1200, then the value of the cracked property must
// be true. If the value is 1200, or less, the value should be false.

function finalFiring(obj, temp) {
    if(temp > 1200) {
        obj.cracked = true;
        return obj;
    } else {
        obj.cracked = false;
        return obj;
    }
}

const myCrackPot = finalFiring(glazePottery(bisqueFire(makePottery(buyClay()))), 1300);
const myWetPot = glazePottery(makePottery(buyClay()));
const myNewPot = finalFiring(glazePottery(bisqueFire(makePottery(buyClay()))), 1100);
console.log(myNewPot);
console.log(myWetPot);
console.log(myCrackPot);