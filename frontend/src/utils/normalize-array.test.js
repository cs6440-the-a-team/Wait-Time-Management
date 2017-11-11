import normalizeArray from "./normalize-array"

test('basic normalization', () => {
    let test_data = [
        {
            id: 1,
            name: "Test 1",
            description: "Testing data 1..."
        },
        {
            id: 2,
            name: "Test 2",
            description: "Testing data 2..."
        },
        {
            id: 3,
            name: "Test 3",
            description: "Testing data 3..."
        },
        {
            id: 4,
            name: "Test 4",
            description: "Testing data 4..."
        },
        {
            id: 5,
            name: "Test 5",
            description: "Testing data 5..."
        }
    ];

    let normalized = normalizeArray(test_data);

    expect(normalized).toMatchObject({
        1: {
            id: 1,
            name: "Test 1",
            description: "Testing data 1..."
        },
        2: {
            id: 2,
            name: "Test 2",
            description: "Testing data 2..."
        },
        3: {
            id: 3,
            name: "Test 3",
            description: "Testing data 3..."
        },
        4: {
            id: 4,
            name: "Test 4",
            description: "Testing data 4..."
        },
        5: {
            id: 5,
            name: "Test 5",
            description: "Testing data 5..."
        }
    });
});