const cleanArray = (array) => {
    const noDuplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (!array[i].includes('u003')) {
            if (!array[i].includes('https')) {
                if (!noDuplicates.includes(array[i])) {
                    noDuplicates.push(array[i])

                }
            }
        }
    }

    return noDuplicates;
}


module.exports = cleanArray;