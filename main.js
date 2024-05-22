//add
function addtwonumber(One , Tow){
    return One + Tow
}
console.log (addtwonumber(18,3))

//sub

let num = function(one , tow){
    return one - tow;
}
console.log (num(20,6))

// multi
let multi = function(oneNumber , towNumber){
    return oneNumber * towNumber;
}
console.log (multi(2,6))

//div 
function divtwonumber(uum1 , uum2){
    return uum1 / uum2
}
console.log (divtwonumber(18,3))



function numbers(num){
    if(num % 3 ==0 &  num % 5 ==0){
        console.log ("num is Fuzz and Buzz")
    } else if (num % 3 ==0){
        console.log ("num is Fuzz")
} else if (num % 5 ==0){
    console.log ("num is Buzz")
} else{
    console.log ("not Buzz and Fuzz")
}
}
numbers(2);

function numbers(num){
    if(num % 3 ==0 &  num % 5 ==0){
        console.log ("num is Fuzz and Buzz")
    } else if (num % 3 ==0){
        console.log ("num is Fuzz")
} else if (num % 5 ==0){
    console.log ("num is Buzz")
} else{
    console.log ("not Buzz and Fuzz")
}
}
numbers(18);

function numbers(num){
    if(num % 3 ==0 &  num % 5 ==0){
        console.log ("num is Fuzz and Buzz")
    } else if (num % 3 ==0){
        console.log ("num is Fuzz")
} else if (num % 5 ==0){
    console.log ("num is Buzz")
} else{
    console.log ("not Buzz and Fuzz")
}
}
numbers(20);



///////////////////////////////////// طريقة اخرى بالفور لاضافة مصفوفة بدال الماب
let numberr = [10, 2 , 3, 4]
let newnumber= []
for (let i=0;  i<numberr.length; i++){
    newnumber.push( numberr[i]*10)
}
console.log(newnumber);
