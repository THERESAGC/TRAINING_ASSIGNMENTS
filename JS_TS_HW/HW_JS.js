// JavaScript Exercises
// 1. Variables and Data Types
// Q1: Declare a variable name and assign your name to it. Print it to the console.

            let name = `THERESA`;
            console.log(name);
// Q2: Create a variable age with a number and a isStudent boolean variable. Log them to the console.

            let age=22;
            let isStudent=true;
            console.log(age,isStudent);
// Q3: Convert a string "123" to a number and check its type.
            let stringex="123";
            stringex=Number(stringex);
            console.log(typeof stringex)
// 2. Operators and Conditionals
// Q4: Write a program that checks if a given number is even or odd.
            function EvenOdd(n)
            {
                if(n%2==0)
                {
                    console.log(`${n}  Even`);
                }
                else{
                    console.log(`${n}  Odd`)
                }
            }

            EvenOdd(9);
            EvenOdd(24);
// Q5: Create a program that takes two numbers and prints the larger one.

            const largernum=(a,b)=>{
                if(a>b)
                {
                    console.log(`${a} is greater than ${b}`)
                }else{
                    console.log(`${b} is greater than ${a}`)
                }
            }

            largernum(3,4)
            largernum(6,7)
// Q6: Write a program that checks if a number is positive, negative, or zero.
                        const check = (a) => {
                            if (a === 0) {
                                console.log(`Zero`);
                            } else if (a > 0) {
                                console.log(`Positive`);
                            } else {
                                console.log(`Negative`);
                            }
                        };


// 3. Loops
// Q7: Print numbers from 1 to 10 using a for loop.

            for(let i=1;i<=10;i++)
            {
                console.log(i)
            }   
// Q8: Print all even numbers between 1 and 20 using a while loop.
                
            let i=1;
            while(i<=20)
            {
                if(i%2==0)
                {
                    console.log(i)
                }
                i++;
            }
// Q9: Use a do-while loop to prompt the user until they enter a number greater than 10.
            
            // let num;
            // do{
            //     num=input("Enter a number greater than 10")
            // }while(num<=10)
            // console.log(`The number entered is ${num}`)
// 4. Functions
// Q10: Write a function add(a, b) that returns the sum of two numbers.
        const add=(a,b)=>{  
            return a+b;
        }
        console.log(add(2,3))
// Q11: Write a function factorial(n) that returns the factorial of n.
        const factorial=(n)=>{
            if(n===0)
            {
                return 1;
            }
            else{
                return n*factorial(n-1);
            }
        }
        console.log(factorial(5))
// Q12: Create a function isPrime(n) that returns true if n is prime, else false.
        const isPrime=(n)=>{
            if(n<=1)
            {
                return false;
            }
            for(let i=2;i<=n/2;i++)
            {
                if(n%i==0)
                {
                    return false;
                }
            }
            return true;
        }
        console.log(isPrime(7))
        console.log(isPrime(8))
        console.log(isPrime(11))
        console.log(isPrime(12))
// 5. Arrays and Objects
// Q13: Create an array of five fruits and print each one using a loop.
        let fruits=["apple","banana","orange","grapes","mango"];
        for(let i=0;i<fruits.length;i++)
        {
            console.log(fruits[i]);
        }
// Q14: Write a function to find the largest number in an array.
        const largest=(arr)=>{
            let max=arr[0];
            for(let i=1;i<arr.length;i++)
            {
                if(arr[i]>max)
                {
                    max=arr[i];
                }
            }
            return max;
        }
        console.log(largest([1,2,3,4,5,6,7,8,9,10]))
// Q15: Create an object person with properties name, age, and city. Print each property.
        let person={    
            name:"Theresa",
            age:22,
            city:"Mumbai"
        }
        console.log(person.name)
        console.log(person.age)
        console.log(person.city)

// Advanced JavaScript Exercises
// 1. Higher-Order Functions and Callbacks
// Q16: Write a function that takes an array and a callback function, then applies the callback to each element.

            const apply=(arr,callback)=>{
                for(let i=0;i<arr.length;i++)
                {
                    callback(arr[i]);
                }
            }
            const callback=(a)=>{
                console.log(a);
            }
            apply([1,2,3,4,5],callback);
// Q17: Use .map() to create a new array that contains the square of each number in [2, 4, 6, 8].
            
            const square=(arr)=>{
                return arr.map(x=>x*x);
            }
            console.log(square([2,4,6,8]));
// Q18: Use .filter() to return only numbers greater than 10 from [5, 12, 8, 130, 44].

            const greater=(arr)=>{
                return arr.filter(x=>x>10);
            }
            console.log(greater([5,12,8,130,44]));

// 2. Asynchronous JavaScript
// Q19: Write a function that returns a promise which resolves after 2 seconds.
            const promise=new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve("Resolved");
                },2000)
            })
            promise.then((value)=>{
                console.log(value);
            })
// Q20: Fetch data from https://jsonplaceholder.typicode.com/posts using fetch() and async/await.
            const fetchData=async()=>{
                const response=await fetch('https://jsonplaceholder.typicode.com/posts');
                const data=await response.json();
                console.log(data);
            }
            fetchData();


// 3. ES6+ Features
// Q21: Use the spread operator to merge two arrays [1, 2, 3] and [4, 5, 6].
            const arr1=[1,2,3];
            const arr2=[4,5,6];
            const arr3=[...arr1,...arr2];
            console.log(arr3);
// Q22: Write a function that uses destructuring to extract properties from an object.
            const person1={
                name:"Theresa",
                age:22,
                city:"Mumbai"
            }
            const extract=({name,age,city})=>{
                console.log(name,age,city);
            }
            extract(person1);
// Q23: Use template literals to print "Hello, my name is [name] and I am [age] years old."
            const print=(name,age)=>{
                console.log(`Hello, my name is ${name} and I am ${age} years old.`);
            }
            print("Theresa",22);
// 4. Closures and Scope
// Q24: Write a function that returns another function that increments a counter.
            const counter=()=>{
                let count=0;
                return ()=>{
                    count++;
                    return count;
                }
            }
            const increment=counter();
// Q25: Demonstrate block scope using let and const.
            let x=10;
            if(true)
            {
                let x=20;
                console.log(x);
            }
            console.log(x);
            const y=10;
            if(true)
            {
                const y=20;
                console.log(y);
            }
            console.log(y);
// 5. Prototypes and Classes
// Q26: Create a constructor function Car with properties make and year.
            function Car1(make,year)
            {
                this.make=make;
                this.year=year;
            }
            let car1=new Car1("Toyota",2021);
            console.log(car1);
// Q27: Convert the above Car function into a class and add a method getAge().
            class Car{
                constructor(make,year)
                {
                    this.make=make;
                    this.year=year;
                }
                getAge()
                {
                    return new Date().getFullYear()-this.year;
                }
            }
            let car2=new Car("Toyota",2021);
            console.log(car2.getAge());
// Q28: Create a subclass ElectricCar that extends Car and adds a property batteryLife.
            class ElectricCar extends Car{
                constructor(make,year,batteryLife)
                {
                    super(make,year);
                    this.batteryLife=batteryLife;
                }
            }
            let car3 = new ElectricCar("Tesla", 2021, "100%");
console.log(car3);

// 6. Modules and Imports
// Q29: Write two separate JavaScript files where one exports a function and the other imports and uses it.

// import { add } from './export.js';
// console.log(add(2, 3));

// Q30: Use ES6 modules to import and export functions from different 
// JavaScript files.

// import.js
import { sub } from './export.js';
console.log(sub(5, 3));