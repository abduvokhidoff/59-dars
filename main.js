let arr = ['Olma', 'Banan', 'Non', 'Mashina', 'Asal', 'Aziza', 'Gul']
console.log(arr)


let arr_2 = []
let arr_3 = []


for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (word.includes('n')) {
        arr_2.push(word)
    }
    else {
        arr_3.push(word)
    }
}


console.log(arr_2, 'Bu sozda n harifi bor')
console.log(arr_3, 'Bu sozda n harifi yoq')