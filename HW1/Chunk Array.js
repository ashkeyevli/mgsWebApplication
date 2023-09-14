/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        chunkedArray.push(chunk);
    }

    return chunkedArray;
};
