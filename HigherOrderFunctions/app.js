// ======================
// FUNCTIONS AS ARGUMENTS
// ======================


function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) +1
    console.log(roll)
}
callTwice(rollDie)

// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand >0.5){
        return function(){
            console.log("CONGRATS!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function() {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

function makeBetweenFunc (min, max) {
    return function (num){
        return num >= min && num <= max;
    }
}

// makeBetweenFunc (50, 100) 
    
// function isBetween(num) {
//     return num >=50 && num <= 100
// }


//DEFINING METHODS

const math = {
    multiply : function(x, y) {
        return x * y;
    },
    divide : function(x, y){
        return x / y;
    },
    square : function(x){
        return x * x;
    }
};



const myMath = {
    PI: 3.14159, 
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;    // or return num * num * num
    }
}

//or (without function)

const myMath = {
    PI: 3.14159, 
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;    // or return num * num * num
    }
}


// "THIS" in Methods


const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}
person.fullName(); //"Robert Herjavec"
person.last = "Pant";
person.fullName(); // "Robert Plant"


const cat = {
    name: 'Blue Steele',
    color: 'grey',
    bredd: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOWW`);
    }
}