// let points =23
// console.log(points == 23);

// let a = 4;
// a++
// console.log(a);
// control flow
// for loop

// for (let i = 0; i < 10; i++) {
//     console.log("run the task",i);
    
// }
// let j =1;
// while (j<=8) {
//     console.log("while loop",j);
//     j++
// }

// let bugget = 7000;

// if (bugget<6000) {
//     console.log("will do dinner in hotel");
// } else{
//     console.log("hello");
// }

// for (let i = 0; i <10; i++) {
//     if (i==5) {
//        console.log(object);
//     }
    
// }
// console.log("sdf");

// let age = 20;
// let weight = 54

// if (age == 20) {
//     console.log("qualify");
// }else{
//     console.log("Dose not qualify:fail");
// }

// // let result = age == 22 ? "QUALIFY" : "FAIL"

// let result = age > 18 ? weight > 55 ? "qualify" : "weightissue" : "ageissue"
// console.log(result);
// let upperCase = function(str){
//     return str.toUpperCase();
// }
// let lowerCase = function(str){
//      return str.toLowerCase();
// }

// let transformer = function(str,fun){
//     return fun(str)
// }

// console.log(transformer("HELLOW neeraj", upperCase));

// let compliment = function(msg){
//     return function(name){
//       console.log(`${msg} and ${name}`);
//       return true
//     }
// }

// console.log(compliment("you are good coder")());


// function greeting(){
// console.log("Welcome to our Codeing Dunia");
// }
// setTimeout(greeting, 3000)


// let car = {
//     name:"honda",
//     model:"2023",
//     color:"black"
// }
// console.log(car);
// console.log(car["name"]);
// console.log(car.color);

// let propertyName = "color"
// console.log(car[propertyName]);

// car.color = "brown"   // This is For Modification
// console.log(car.color); 

// console.log(car["color"]);


// let obj = {
//     prop1 : "value1",
//     prop2 : "value2"
// }

// delete obj.prop1
// console.log(obj.prop1);

// let person = {
//     firstName: "neeraj",
//     lastName: "kumar",
//     city: "bhagalpur",
//     birthYear:2000,
//     Education:"Electical engineer",
//     getSummary: function(){
//        // return `${this.firstName} ${this.lastName} live in ${this.city} and birth Year is ${this.birthYear} he is ${this.Education}`
//        return this
        
//     }
    
// }
// console.log(person.getSummary());
 
// FOREACH

// let fruits = ["apple", "banana", "gava","pineapple","orange"]

// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// console.log("**********");

// fruits.forEach(element => {
//     console.log(element);
// });
// console.log("**********");

// fruits.forEach(function(element){
//   

// console.log(element);
// })

// let select = document.querySelector('a')

// console.log(select.getAttribute('href'));

// select.setAttribute('href',"https://www.youtube.com/")
// console.log(select.getAttribute('href'));
// select.innerText = "you tube link replaced"

// let itemSelected = document.querySelector('.ul')

// itemSelected.addEventListener('click',(e)=>{
//     // console.log("Item clicked");
//     // console.log(e.target);
//     // e.target.style.textDecoration = "linr-through"
//     // console.log("inside li");
//     // e.target.remove()
// })

// let button = document.querySelector('.button')
// button.addEventListener('submit',(e)=>{
//   console.log("button clicked");
  
// })


// console.log("live reload")/

// let arr = [1,2,3,4,5,6,7]
// // console.log(arr.slice(1));
// console.log(arr.filter());
// let found = arr.find(el => el>2)
// console.log(found);

// let dateDeclear = new Date(21,5,24)
// console.log(dateDeclear);

// let dateDeclear = new Date(8640000)
// console.log(dateDeclear);

//  let curreentDate = new Date().getTime();
//  console.log(curreentDate);

// let completeDateAndTime = new Date();
// console.log(completeDateAndTime);

// console.log(completeDateAndTime.getFullYear());

// console.log(completeDateAndTime.getMonth());

// console.log(completeDateAndTime.getDay());
