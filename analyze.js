function analyzeArray(array) {
    output = {}

    let sum = 0;
    array.forEach(element => {
        sum += element
    });
    output['average'] = sum / array.length;
    output['min'] = Math.min(...array);
    output['max'] = Math.max(...array);
    output['length'] = array.length;
    return output;
}
module.exports=analyzeArray;