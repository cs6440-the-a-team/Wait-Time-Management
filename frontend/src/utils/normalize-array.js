
function normalizeArray(data, id_field_name="id") {
    let normalized = {};
    if (data && Array.isArray(data)) {
        for (let data_point of data) {
            normalized[data_point[id_field_name]] = data_point;
        }
    }
    return normalized;
}

export default normalizeArray;