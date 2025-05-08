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


// vazifa3
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

const arr1 = [7, 8, 9];
const arr2 = [6, 5, 4];
const arr3 = [3, 2, 1];

const merged = [...arr1, ...arr2, ...arr3].sort((a, b) => a - b);
console.log(merged);
