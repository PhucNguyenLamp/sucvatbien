let n = 10; 
let count = 0;

// for (let a = 1; a <= n; a++) {
//     for (let b = 1; b <= n; b++) {
//         for (let c = 1; c <= n; c++) {
//             if (a * a == b * b + c * c) {
//                 count++;
//             }
//         }
//     }
// }
for (let a = 1; a < n; a++) {
    for (let b = 1; b < n; b++) {
        let csquare = a*a + b*b;
        let c = Math.sqrt(csquare);
        if (c <= n &&) {
            count++;
        }
    }
}
console.log(count);