function sortDescending(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

let inputArray = [5, 2, 9, 1, 5, 6];
sortDescending(inputArray);
console.log(inputArray);
