// task1
// var start = +prompt("Enter start of diap.");
// var end = +prompt("Enter end of diap.");
// var sum = 0;
// for(let i = start; i <= end; i++) sum += i;
// alert(`Sum: ${sum}`);

// task2
// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
// if(a < b)
// {
//     let c = a;
//     a = b;
//     b = c;
// }
// for(var i = b; ((a % i != 0)||(b % i != 0))&&(i>0); i--);
// if(i === 0) alert("No");
// else alert(`It is ${i}`);

// task3
// var number = +prompt("Enter number");
// var result = [];
// for(let i = number; i > 0; i--) if(number % i === 0) result.push(i);
// alert(`Numbers: ${result}`);

// task4
// var number = prompt("Enter number");
// alert(`Count of digitals: ${number.length}`);

// task5
// var result = {"negative": 0, "positive": 0, "null": 0, "even": 0, "odd": 0};
// for(let i = 0; i < 10; i++)
// {
//     let num = +prompt(`[${i+1}]Enter number`);
//     if(num > 0) result["positive"]++;
//     else if(num < 0) result["negative"]++;
//     else result["null"]++;
//     if(num%2===0) result["even"]++;
//     else result["odd"]++;
// }
// alert(`Negative:${result["negative"]}\nPositive:${result["positive"]}\nNull:${result["null"]}\nEven:${result["even"]}\nOdd:${result["odd"]}`);

// task6
// while(true)
// {
//     let a = +prompt("Enter first number");
//     let b = +prompt("Enter second number");
//     let c = prompt("Enter action(+, -, *, /)");
//     let result = "Answer: ";
//     switch(c)
//     {
//         case "+":
//             result += (a+b);
//             break;
//         case "-":
//             result += (a-b);
//             break;
//         case "*":
//             result += (a*b);
//             break;
//         case "/":
//             result += (a/b);
//             break;
//     }
//     alert(result);
//     if(!confirm("Continue?")) break;
// }

// task7
// var number = prompt('Enter number');
// var move = +prompt('Count of move');
// alert(`Result: ${number.slice(move) + number.slice(0, move)}`);

// task8
// const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// var current_day = 0;
// var next_day;
// do {
//     alert(`Day is ${days[current_day]}`);
//     current_day++;          
//     if (current_day === days.length) current_day = 0;   
// } while (confirm('Do u wanna continue?'));

// task9
// var result = "";
// for(let i = 2; i <= 9; i++, result+="\my_number") for(let j = 1; j <= 10; result+=(i*j)+" ", j++);
// alert(result);

// task10
var user_number = +alert("Imagine number from 1 to 100");
var from = 0;
var to = 100;
var my_number = 50;

metka:while (user_number !== my_number ) {
    let answer = prompt(`Your number > or < or = number:${my_number}`);
    switch(answer)
    {
        case ">":
            from = my_number;
            my_number = Math.ceil((to - from) / 2 + from);
            break;
        case "<":
            to = my_number; 
            my_number = Math.ceil((to - from) / 2 + from);
            break;
        case "=":
            break metka;
    }
}
alert(`Imagine number is ${my_number}`);