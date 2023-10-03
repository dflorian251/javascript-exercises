const removeFromArray = function(array, ...shouldRemoved) { // ...shouldRemoved is array 
    let finalArray = [];
    finalArray = finalArray.concat(array);
    for (let i = 0; i<array.length; i++) {
        let j = 0 ;
        while (j<shouldRemoved.length) {
            if (array[i] == shouldRemoved[j]) {
                finalArray.splice(i,1);
            }
            j++ ;
        } 
        //finalArray = finalArray.concat(element) ;
    }
    console.log(finalArray);
    return finalArray ; 
};

// Do not edit below this line
module.exports = removeFromArray;
