// DO NOT EDIT users
var users = [
  {
    id: 1,
    first_name: "Nguyễn Văn",
    last_name: "A",
    age: 20,
    sex: "male",
  },
  {
    id: 2,
    first_name: "Trần Văn",
    last_name: "B",
    age: 45,
    sex: "female",
  },
  {
    id: 3,
    first_name: "Ngô Thị",
    last_name: "C",
    age: 30,
    sex: "female",
  },
];

// 1. Exercise 01
//Sử dụng hàm forEach() của mảng để lấy ra first_name và last_name của toàn bộ user có trong mảng users và cho chúng vào một mảng mới
const names = [];
users.forEach((user) => {
  const { first_name, last_name } = user;
  names.push({ first_name, last_name });
});
console.log(names);

// Exercise 02:
//Viết một hàm trả về toàn bộ user trong mảng users thoả mãn điều kiện giới tính là nam và tuổi nhỏ hơn 40
function filterUsersByGenderAndAge(users) {
  return users.filter((user) => user.sex === "male" && user.age < 40);
}
console.log(filterUsersByGenderAndAge(users));

// Exercise 03
// Viết một hàm trả về toàn bộ tên đầy đủ của các user (first_name + last_name) trong mảng users
function getFullNames(users) {
  return users.map((user) => `${user.first_name} ${user.last_name}`);
}
console.log(getFullNames(users));

// Exercise 04
// Viết một hàm trả về một mảng mới vẫn chứa toàn bộ user trong mảng users nhưng key của các phần tử trong mảng phải được viết dưới dạng camelCase
function convertToCamelCase(users) {
  return users.map((user) => {
    const camelCaseObj = {};
    for (let key in user) {
      const camelCaseKey = key.replace(
        /_([a-z])/g,
        (
          match,
          letter //sử dụng phương thức replace() để thay thế mọi ký tự gạch dưới (_) bằng chữ cái đầu tiên của từ tiếp theo, viết hoa chữ cái đó.
        ) => letter.toUpperCase()
      );
      camelCaseObj[camelCaseKey] = user[key];
    }
    return camelCaseObj;
  });
}
console.log(convertToCamelCase(users));

// Exercise 05
// Viết một hàm trả về trung bình tuổi của các user có trong mảng users
function getAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}
console.log(getAverageAge(users));

// Exercise 0601
// Viết một hàm trả về toàn bộ tên đầy đủ của các user (first_name + last_name) trong mảng users, yêu cầu phải sử dụng hàm Array.prototype.reduce
function getFullNames(users) {
  return users.reduce((acc, user) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    return [...acc, fullName];
  }, []);
}
console.log(getFullNames(users));

// Exercise 0602
// Viết một hàm trả về toàn bộ user trong mảng users thoả mãn điều kiện giới tính là nam và tuổi nhỏ hơn 40, yêu cầu phải sử dụng hàm Array.prototype.reduce
function getMaleUnder40(users) {
  return users.reduce((acc, user) => {
    if (user.gender === "male" && user.age < 40) {
      return [...acc, user];
    } else {
      return acc;
    }
  }, []);
}
console.log(getMaleUnder40(users));

// Exercise 0603
// Viết một hàm trả về một mảng mới vẫn chứa toàn bộ user trong mảng users nhưng key của các phần tử trong mảng phải được viết dưới dạng camelCase, yêu cầu phải sử dụng hàm Array.prototype.reduce
function convertToCamelCase(users) {
  return users.reduce((acc, user) => {
    const camelCaseUser = Object.keys(user).reduce((camelCaseObj, key) => {
      const camelCaseKey = key.replace(/_([a-z])/g, function (m, p1) {
        return p1.toUpperCase();
      });
      camelCaseObj[camelCaseKey] = user[key];
      return camelCaseObj;
    }, {});
    return [...acc, camelCaseUser];
  }, []);
}
console.log(convertToCamelCase(users));

// Exercise 07
// Viết một hàm trả về một mảng mới gồm các phần tử trong mảng users với first_name đã được sắp xếp theo thứ tự tăng dần trong bảng chữ cái

function sortByFirstName(users) {
  const sortedUsers = [...users].sort((a, b) => {
    const nameA = a.first_name.toUpperCase();
    const nameB = b.first_name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedUsers;
}

console.log(sortByFirstName(users));
// Output: [
//   { id: 1, first_name: "John", last_name: "Doe", gender: "male", age: 30 },
//   { id: 3, first_name: "Bob", last_name: "Smith", gender: "male", age: 45 },
//   { id: 2, first_name: "Jane", last_name: "Doe", gender: "female", age: 25 },
// ]

// Exercise 08
// Viết một hàm faMap hoạt động giống hệt như Array.prototype.map

// Exercise 09
// Viết một hàm faFilter sử dụng hàm faMap viết ở trên hoạt động giống hệt như Array.prototype.filter

// Exercise 10
// Viết một hàm faReduce hoạt động giống hệt như Array.prototype.reduce

// Exercise 1101
// Viết một hàm sử dụng hàm faReduce viết ở trên hoạt động giống hệt như Array.prototype.map

// Exercise 1102
// Viết một hàm sử dụng hàm faReduce viết ở trên hoạt động giống hệt như Array.prototype.filter

// Exercise 1201
// Viết một hàm tính tổng của các phần tử trong mảng bất kỳ sử dụng hàm faReduce viết ở trên

// Exercise 1202
// Viết một hàm tính tích của các phần tử trong mảng bất kỳ sử dụng hàm faReduce viết ở trên

// Exercise 1203
// Viết một hàm đảo ngược các phần tử trong mảng bất kỳ sử dụng hàm faReduce viết ở trên

// var student = {
//   name: "Nguyen Van A",
//   addresses: [
//     {
//       type: "personal",
//       location: "Hanoi",
//     },
//     {
//       type: "work",
//       location: "Hoa Lac",
//     },
//   ],
//   clazz: {
//     frontend: {
//       name: "Angular",
//     },
//   },
// };

// getProp(student, "name"); // Nguyen Van A same as student.name or student['name']
// getProp(student, "addresses.0.location"); // Hanoi same as student.addresses[0].location
// getProp(student, "clazz.frontend.name"); // Angular same as student.clazz.frontend.name
// getProp(student, "hobbbies.name"); // undefined no field hobbies in student

// // DO NOT EDIT CODE BELOW
// if (window.Cypress) {
//   window.jsa401 = {
//     problem01,
//     problem02,
//     problem03,
//     problem04,
//     problem05,
//     problem0601,
//     problem0602,
//     problem0603,
//     problem07,
//     faMap,
//     faFilter,
//     faReduce,
//     problem1101,
//     problem1102,
//     problem1201,
//     problem1202,
//     problem1203,
//     getProp,
//   };
// }

// // map takes an array and function as argument
// function map(arr, mapFunc) {
//   const mapArr = []; // empty array
//   // loop though array
//   for (let i = 0; i < arr.length; i++) {
//     const result = mapFunc(arr[i], i, arr);
//     mapArr.push(result);
//   }
//   return mapArr;
// }

// // reducer takes an array, reducer() and initialValue as argument
// function reduce(arr, reducer, initialValue) {
//   let accumulator = initialValue === undefined ? 0 : initialValue;
//   // loop though array
//   for (let i = 0; i < arr.length; i++) {
//     accumulator = reducer(accumulator, arr[i], i, arr);
//   }
//   return accumulator;
// }

// var m = new Map();
// function tick(v) {
//   if (m.has(v)) {
//     m.clear();
//   }
//   m.set(v, true);
// }
// tick("a");
// tick("b");
// tick("c");

// console.log([...m.entries()]);
