export const linearSearch = (needle, haystack) => {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle) return i;
    }
};

export const binarySearch = (needle, haystack) => {
    const midPoint = Math.floor((haystack.length-1)/2);
    if(haystack.length == 1) return 0;
    if(needle > haystack[midPoint]) {
        const newArr = haystack.slice(midPoint + 1, haystack.length);
        return midPoint + 1 + binarySearch(needle, newArr);
    } else if(needle < haystack[midPoint]) {
        const newArr = haystack.slice(0, midPoint);
        return binarySearch(needle, newArr);
    } else {
        return midPoint;
    }
};

export const binarySearchIterative = (needle, haystack) => {
    let start = 0;
    let end = haystack.length - 1;
    let midPoint;
    
    while(true) {
        midPoint = Math.floor((end + start)/2);
        
        const pivot = haystack[midPoint]; 
        if(needle > pivot) {
            start = midPoint + 1;
        } else if(needle < pivot) {
            end = midPoint - 1;
        } else {
            return midPoint;
        }
    }
};