
function normalizeArray(data, id_field_name="id") {
    let normalized = null;
    if (data && Array.isArray(data)) {
        normalized = {};
        for (let data_point of data) {
            normalized[data_point[id_field_name]] = data_point;
        }
    }
    return normalized;
}

export default normalizeArray;