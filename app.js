/* var foo = 'pen';
var bar = 'hello world';
console.log(bar);
console.log(foo);

let baz = 'hola mundo';
const boo = 'pizza';
console.log(baz);
console.log(boo);

var payRate = 18;
var payPerWeek = payRate * 40;
var payPerMonth = payPerWeek * 4;
var payPerYear = payPerMonth * 12;
console.log(payPerYear);
 */
//Data types
/* var string = 'hello';
var anotherString = "world";
var fix = 'you can\'t do this';
var int = 2;
var anotherInt = 3.14;
var bool = false;
var bool2 = true;
var temp = 1;
temp = 2;
temp = temp + 2;
temp = temp - 1;
console.log(temp);
var concat = 'hello' + 'world';
console.log(concat);

var foo2 = 1;
foo2++;
console.log(foo2);
foo2--;
console.log(foo2); */

/* var pto = function(weeks = 1) {
    var total;
    var rate = 5;
    var userInput = prompt('How many weeks?')
    if (userInput != null) {
        total = rate * (userInput / 2);
        weeks = userInput;
    } else {
        total = rate * (weeks / 2);
    }
    return `Your PTO for ${weeks} week(s) is currently: ${total}`;
}
console.log(pto()); */

/* var foo3 = 'hello';
let bar = 'mundo';

function myFunction() {
    var faz = 'hola';
    let bar = 'world';
    const yo = 'yoyo';
    console.log(yo);
    return yo;
};
myFunction();
console.log(foo3);
console.log(bar);
console.log(yo);
 */
/* var foo4 = 1;
let foo5 = 2;
const foo6 = 3;
foo4 = 4;
foo5 = 5;
foo6 = 6; */

var animal = (function() {
    var dog = 'dog';
    return dog;
})();

var zoo = (function() {

    return animal;
})(animal);

console.log(zoo);