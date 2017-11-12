import { randomNumbers, randomCharacters, randomInt } from "./random"

test('randomInt', () => {
    let rnd = randomInt();
    expect(rnd).toBeGreaterThanOrEqual(1)
    expect(rnd).toBeLessThanOrEqual(100);
});

test('randomInt between 1 and 10', () => {
    let num_tests = 0;
    while (num_tests < 100) {
        let rnd = randomInt(1, 10);
        expect(rnd).toBeGreaterThanOrEqual(1);
        expect(rnd).toBeLessThanOrEqual(10);

        num_tests++;
    }
});

test('randomCharacters', () => {
    let num_tests = 0;
    while (num_tests < 100) {
        let rnd_chars = randomCharacters(num_tests);
        expect(rnd_chars.length).toBe(num_tests);

        let rnd_chars2 = randomCharacters(num_tests);
        expect(rnd_chars.length).toBe(num_tests);

        let rnd_chars3 = randomCharacters(num_tests);
        expect(rnd_chars.length).toBe(num_tests);

        num_tests++;
    }
});

test('randomNumbers', () => {

    let num_tests = 0;
    while (num_tests < 100) {
        let rnd_chars = randomNumbers(num_tests);
        expect(rnd_chars.length).toBe(num_tests);

        let rnd_chars2 = randomNumbers(num_tests);
        expect(rnd_chars.length).toBe(num_tests);

        let rnd_chars3 = randomNumbers(num_tests);
        expect(rnd_chars.length).toBe(num_tests);

        num_tests++;
    }
});