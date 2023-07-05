const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let minIdx = i;
        for (let j = i+1; j < arr.length; j++){
            if ( arr[i] > arr[minIdx] ) {
                const temp = arr[j]
                arr[i] = arr[j]
                arr[j] = temp
            } 
        }
    }

}
selectionSort(myArr)