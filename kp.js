/ Simple function
// function printMessage() {
//   console.log("Hello");
// }
// printMessage();

// Arrow function
// const printArrow = () => {
//   console.log("Hello arrow function");
// };
// printArrow();

// // Arrow function with return
// const add = (a, b) => a + b;
// console.log("Sum:", add(20, 30));

// // Template literals
// const firstName = 'Suman';
// const brotherName = 'Aman';
// console.log(My name is "${firstName}" and my brother's name is "${brotherName}");
// const first = "Harsh";
// const second = "deep";
// console.log(we are in fullstack ${first} and ${second} we are brothers);
// // Ternary operator
// const userAge = 2;
// userAge >= 18 ? console.log("You can drive"): console.log("You cannot drive");

// // Object and spread operator
// const person = {
//   name: 'Suman',
//   age: '23',
//   phoneNumber: '1234567890',
// };
// // console.log(person)
// const updatedPerson = { ...person, name: 'Ram', age: '50' };
// console.log("Updated person object:", updatedPerson);

// // Object destructuring
// const { name, age, car } = person;
// console.log("Age from object:", age); // Output: 23

// // Array spread
// const numbers = [10, 20, 30];
// console.log("Original array:", numbers);
// const extendedNumbers = [...numbers, 50, 60];
// console.log("Extended array:", extendedNumbers);

// // Using map to modify array
// const baseNumbers = [10, 20, 30];
// const incrementedNumbers = baseNumbers.map(n => n + 10);
// console.log("Mapped array:", incrementedNumbers);

// // Using filter
// const values = [10, 20, 30, 40, 50, 60];
// const filteredValues = values.filter(n => n !== 50);
// console.log("Filtered values (no 50):", filteredValues);

// // Category filtering
// const categories = ['mobiles', 'laptops', 'smartWatch', 'headphones'];
// const nonMobileCategories = categories.filter(c => c !== 'mobiles');
// console.log("Categories without mobiles:", nonMobileCategories);

// // Filtering array of objects
// const phones = [
//   { mobileName: 'Samsung F2', price: '10000' },
//   { mobileName: 'Sony Xperia', price: '80000' },
//   { mobileName: 'OnePlus', price: '35000' },
//   { mobileName: 'iPhone', price: '100000' },
//   { mobileName: 'Poco', price: '25000' },
//   { mobileName: 'Redmi', price: '15000' },
// ];

// const phonesWithoutPoco = phones.filter(phone => phone.price !== '25000');
// console.log("Phones excluding Poco:", phonesWithoutPoco);

// // Reduce example
// const numberList = [1, 2, 3, 4, 5];
// const reducedResult = numberList.reduce((acc, current) => acc - current);
// console.log("Reduced result:", reducedResult); // Output: -13

// // Async/Await with fetch
// async function fetchData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await response.json();
//   console.log("Fetched Posts:", posts);
// }
// fetchData();

// // Extra logic without exports
// const addNumbers = (a, b) => a + b;
// const defaultUser = "Same";
// console.log("Extra function result:", addNumbers(5, 7));
// console.log("Default user value:", defaultUser);