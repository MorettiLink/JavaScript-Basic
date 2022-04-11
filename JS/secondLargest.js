//Se busca encontrar el segundo numero más grande en un array

function secondLargestNumber(numbers) {
    let first = numbers[0] //partimos de la primera posicion de la variable de numeros
    let second = 0;
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i]
        }
        if (numbers[i] > second && numbers[i] < first) {
            second = numbers[i]
        }
    }
    return second;
}

let nums = [8,15,12,10,265,59,356,548,3145,2,3,46,520];
console.log(secondLargestNumber(nums));

//option two
function secondLargestNumber(numbers) {
    numbers.sort();
    numbers.reverse();
    return numbers[1];
}
let nums2 = [8,15,12,10,265,59,356,548,3145,2,3,46,520];
console.log(secondLargestNumber(nums2));