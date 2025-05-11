// let users = [
//     {
//         id: 1,
//         name: "Hamroz",
//         surname: "Nuriddinov",
//         age: 18,
//         study: null,
//         achievements: ["Degree of 3rd in Volleyboll"]
//     },
//     {
//         id: 2,
//         name: "Islomxon",
//         surname: "Dexqonov",
//         age: 16,
//         study: undefined,
//         achievements: ["weight 80kg", "Boxer"]
//     },
//     {
//         id: 3,
//         name: "Husniddin",
//         surname: "Ismoilov",
//         age: 17,
//         study: "22-school",
//         achievements: ["nothing"]
//     },
//     {
//         id: 4,
//         name: "Ulug'bek",
//         surname: "Raxmatullayev",
//         age: 20,
//         study: null,
//         achievements: ["nothing"]
//     },
// ]
// let age = prompt("Yosh kiriting")-0

// function findUser(){
//     let findByAge = users.filter(item => item.age >= age)
//     let listAge = findByAge.map(item => item.age)
//     console.log("search bu age",findByAge);
//     console.log("collect age",listAge);
    
// }
// findUser()



// 3 ushbu arrayni juft indexlarini qaysilari juft songa teyishli ekanligini toping [0,1,2,2,3,3,4,4,5,6,7,1]
// let summa = 0
// let arr = [0,1,2,2,3,3,4,4,5,6,7,1]
//     let res1 = arr.filter((item,index) =>  item % 2 ==0 && index % 2 == 0)
//     res1.map(item => summa += item)
//     console.log(res1);
//     console.log(summa);





// ________________________________________________uy ishi___________________________________________________


// let users = [
//         {
    //         id: 1,
    //         name: "Hamroz",
    //         surname: "Nuriddinov",
    //         age: 18,
    //         salary: 1000000
    //     },
    //     {
    //         id: 2,
    //         name: "Islomxon",
    //         surname: "Dexqonov",
    //         age: 16,
    //         salary: 100000
    //     },
    //     {
    //         id: 3,
    //         name: "Husniddin",
    //         surname: "Ismoilov",
    //         age: 17,
    //         salary: 10000
    //     },
    //     {
    //         id: 4,
    //         name: "Ulug'bek",
    //         surname: "Raxmatullayev",
    //         age: 20,
    //         salary: 1000
    //     },
    // ]
//_________________________________________________________ vazifa1__________________________________
    // 1

    // function getSalaryData(users) {
    //     const salaryArray = users.map(emp => emp.salary); 
    //     const totalSalary = salaryArray.reduce((sum, sal) => sum + sal, 0);
    //     return { salaryArray, totalSalary };
    // }
    
    // const result = getSalaryData(users);
    // console.log(result);

    // 2   Oyligi eng katta

// function getMaxSalaryName(users) {
//   const maxEmp = users.reduce((max, emp) => emp.salary > max.salary ? emp : max, users[0]);
//   console.log(maxEmp.name);
// }
// getMaxSalaryName(users); 


// 3 sortlash (age,name,salary boyicha)

// function sortEmployees(users, key) {
//     const sorted = [...users].sort((a, b) => {
//       if (typeof a[key] === 'string') return a[key].localeCompare(b[key]);
//       return a[key] - b[key];
//     });
//     console.log(sorted);
//   }
//  sortEmployees(users, 'name');                         //name boyicha;
// sortEmployees(users, 'age');                          //age boyicha
// sortEmployees(users, 'salary');                      //salary boyicha





// 4  [43, 12, 76, 23, 97, 28, 11] tartiblash

// const arr = [43, 12, 76, 23, 97, 28, 11];
// console.log(arr.sort((a, b) => a - b));


// // 5. minimum qiymat
// const arr = [43, 12, 76, 23, 97, 28, 11];
// console.log(Math.min(...arr));


// 6 rekursiya(name yigish)

// function nameCollect(users, index = 0, names = []) {
//     if (index >= users.length) return names;
//     names.push(users[index].name);
//     return nameCollect(users, index + 1, names);
//   }
  
//   let result = nameCollect(users);
// console.log(result); 



// 7.ID orqali xodimni topish

// function findEmployeeById(users, id) {
//     const index = users.findIndex(user => user.id === id);
//     if (index !== -1) {
//       console.log("Index:", index);
//       console.log("Xodim:", users[index]);
//     } else {
//       console.log("Xodim topilmadi");
//     }
//   }
//   findEmployeeById(users, 4);


// _________________________________________________vazifa3_________________________________________________________
// 1."Apple" mavjudligi

// let fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits.includes('Apple')); 

// 2
// let person = [
//     { name: "Hamroz", age: 20 },
//     { name: "Islomxon", age: 19 },
//     { name: "Husniddin", age: 15 },
//   ];
  
//   person.forEach(p => {
//     if (p.age === 19) console.log(p);
//   });
  
// 3
// let arr = [2, false, "Hello", [null, 5, "Apple", ["Username", false, 7]]];

// // 1
// let flat1 = arr.flat(Infinity);
// console.log(flat1);

// // 2(recursive)
// function recursive(arr) {
//   return arr.reduce((acc, val) =>
//     Array.isArray(val) ? acc.concat(recursive(val)) : acc.concat(val), []);
// }
// let flat2 = recursive(arr);
// console.log(flat2);


// 5

// const arr1 = [7, 8, 9];
// const arr2 = [6, 5, 4];
// const arr3 = [3, 2, 1];

// const merged = [...arr1, ...arr2, ...arr3].sort((a, b) => a - b);
// console.log(merged);





//_____________________________________ vazifa 2________________________________________
// 1

// let arr1 = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// arr1.sort((a, b) => a - b);
// console.log(arr1);

// 2
// let arr2 = [1, 6, 9, 5, 8, 10, 15];
// let sum = arr2.slice(2, 6).reduce((a, b) => a + b, 0);
// console.log(sum);


// 3
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let item = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(itam); 

// 4
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log({ max, min });


// 6
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// 7
// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// let odd = arr.filter(a => a % 2 !== 0);
// console.log(odd);

// 8
// let arr = [2, 3, 4, 5, 7];
// let oddInd = arr.filter((_, a) => a % 2 !== 0);
// console.log(oddInd);


// 9
// let arr = [5, 1, 7, 4, 3, 8];
// let maxOddInd = Math.max(...arr.filter((_, a) => a % 2 !== 0));
// console.log(maxOddInd);


// 10
// let arr = [2, 1, 3, 8, 4];
// let minIdx = arr.indexOf(Math.min(...arr));
// let maxIdx = arr.indexOf(Math.max(...arr));
// let [start, end] = [Math.min(minIdx, maxIdx), Math.max(minIdx, maxIdx)];
// for (let a = start + 1; a < end; a++) arr[a] = 0;
// console.log(arr); 

// 11
// function oddArray(n) {
//     return Array.from({ length: n }, (_, a) => a + 1).filter(b => b % 2 !== 0);
//   }
//   console.log(oddArray(100));
  
// 12

// let arr = [22, 3, 5, 6, 3, 2, 3];
// let reversed = [];
// for (let a = arr.length - 1; a >= 0; a--) {
//   reversed.push(arr[a]);
// }
// console.log(reversed);


// 13

// let arr = [3, 5, 6, 3, 2, 3];
// let obj = [];

// arr.forEach(item => {
//   if (!obj.includes(item)) {
//     obj.push(item);
//   }
// });

// console.log(obj);


// 14
let arr = [5, 6, 3, 2, 3];
let evenIndMin = Math.min(...arr.filter((_, a) => a % 2 === 0));
console.log(evenIndMin);
