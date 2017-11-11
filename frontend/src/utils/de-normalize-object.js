function deNormalizeObject(obj) {
    return Object.keys(obj).map(function(one_id) {
        return obj[one_id];
    });
}

export default deNormalizeObject;