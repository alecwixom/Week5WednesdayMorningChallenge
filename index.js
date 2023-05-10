let phoneNumber = function (numbers) {
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
}

console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPNumber (arr, ) {
//     let template = `(801) xxx-xxxx`
//     for (let i in arr) {
//         template = template.replace(`x`, arr[i])
//     }
//     return template

// }

// console.log(createPNumber([4,4,4,5,5,5,5]));