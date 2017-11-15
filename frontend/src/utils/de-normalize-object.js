function deNormalizeObject(obj) {
    if (obj) {
        return Object.keys(obj).map(function(one_id) {
            return obj[one_id];
        });
    }

    return [];
}

export default deNormalizeObject;