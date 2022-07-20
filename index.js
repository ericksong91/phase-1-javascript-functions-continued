function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun())
console.log(saturdayFun("go bowling"))

function mondayWork(monday = "go to the office"){
    return `This Monday, I will ${monday}.`
}

console.log(mondayWork())
console.log(mondayWork("go bowling"))

function wrapAdjective(emphasis = "*"){
    return function (phrase = "special") {
        return `You are ${emphasis}${phrase}${emphasis}!`
    };

}

console.log(wrapAdjective("%")("a dedicated programmer"))