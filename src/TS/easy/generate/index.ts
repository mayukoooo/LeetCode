function generate(numRows: number): number[][] {
    let result: number[][] = Array.from(Array(numRows), () => []);
    let p1 = 0, p2 = 0
    let i = 0
    
    result[0][0] = 1

    while(i < numRows - 1) {
        if(p1 === p2) {
            result[i+1].push(result[i][p1])
            console.log("hoge1")
            p2++
        } else if(!result[i][p2]) {
            console.log("!result[i][p2]", !result[i][p2])
            console.log("result[i][p2]", result[i][p2])
            result[i+1].push(result[i][p1])
            console.log("hoge2")
            i++
            p2 = 0
            p1 = 0
        } else {
            result[i+1].push(result[i][p1] + result[i][p2])
            console.log("hoge3")
            p2++
            p1++
        }
    }

    return result
};
// type Generate = (numRows: number) => number[][]
// const generate: Generate = (numRows) => {
//     let result: number[][] = Array.from(Array(numRows), () => []);
//     let p1 = 0, p2 = 0
//     let i = 0
    
//     result[0][0] = 1

//     while(i < numRows - 1) {
//         if(p1 === p2) {
//             result[i+1].push(result[i][p1])
//             console.log("result[i+1].push(result[i][p1])", result[i+1].push(result[i][p1]))
//             console.log("result", result)
//             p2++
//         } else if(!result[i][p2]) {
//             result[i+1].push(result[i][p1])
//             i++
//             p2 = 0
//             p1 = 0
//         } else {
//             result[i+1].push(result[i][p1] + result[i][p2])
//             p2++
//             p1++
//         }
//     }

//     return result
// };
// console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(3)) // [[1],[1,1],[1,2,1]]
// console.log(generate(1)) // [[1]]
