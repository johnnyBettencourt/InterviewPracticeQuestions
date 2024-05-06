const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

const mergeSortArr = (arr1, len1, arr2, len2) => {
    let i = len1 + len2 -1;
    let j = len1 -1;
    let k = len2 -1;
    while (j >= 0 && k >= 0){
        if (arr1[j] > arr2[k]){
            arr1[i] = arr1[j];
            j--;
        }
        else{
            arr1[i] = arr2[k];
            k--;
        }
        i--;
    }
    while(k>=0){
        arr1[i] = arr2[k];
        i--;
        k--;
    }
    return arr1
}

console.log(mergeSortArr(nums1, m, nums2, n));