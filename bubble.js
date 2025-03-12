function bubbleSort(arr) {
    let i = 0;
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }  
        }
        i++;
    }
    return arr;
}

module.exports = bubbleSort;