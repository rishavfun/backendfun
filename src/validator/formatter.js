

// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]


let tr = function(){
    console.log("  function  up    ".trim())
}

let toLCase = function(){
    console.log("OLA UBER".toLowerCase() );
}

let toUCase =function(){
    console.log('swiggy zomato'.toUpperCase());
}

module.exports.trim = tr
module.exports.LowerCase = toLCase
module.exports.UpperCase =toUCase 
