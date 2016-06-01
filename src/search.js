export const linearSearch = (needle, haystack) => {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle) return i;
    }
};

export const binarySearch = (needle, haystack) => {
    const midPoint = Math.floor(haystack.length/2);
    
    if(needle > haystack[midPoint]) {
        const newArr = haystack.slice(midPoint + 1, haystack.length);
        return midPoint + 1 + binarySearch(needle, newArr);
    } else if(needle < haystack[midPoint]) {
        const newArr = haystack.slice(0, midPoint - 1);
        return binarySearch(needle, newArr);
    } else {
        return midPoint;
    }
};