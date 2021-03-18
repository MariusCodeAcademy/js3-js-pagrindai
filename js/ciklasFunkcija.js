// parasyti funkcija kuri atspausdina visus masvo reiksmes

// isivaizduojam kad musu masyvas yra arr

let arr = [-26, -13, -11, 5, 20, 49, 42, -13, -19, 48];
let arr2 = [-26, -13, -11, 5, 20, 49, 42, -13, -19, 48];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

function printArray(masyvoPav) {
  for (let index = 0; index < masyvoPav.length; index++) {
    console.log(masyvoPav[index]);
  }
}

printArray(arr);
console.log("-------------------");

printArray(arr2);
