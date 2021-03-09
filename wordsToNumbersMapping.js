const phone = '3662277'
const words = ['foo', 'bar', 'baz', 'foobar', 'emo', 'cap', 'car', 'cat']

// http://www.lizard.ws/ - check algorithm complexity

console.log(getWordsToNumbersMapping(phone, words)); // ['foo', 'bar', 'foobar', 'emo', 'cap', 'car']

// 1. Good - complexity 1
function getWordsToNumbersMapping(phone, words) {
    const combinationMap = {
        a: 2,
        b: 2,
        c: 2,
        d: 3,
        e: 3,
        f: 3,
        g: 4,
        h: 4,
        i: 4,
        j: 5,
        k: 5,
        l: 5,
        m: 6,
        n: 6,
        o: 6,
        p: 7,
        q: 7,
        r: 7,
        s: 7,
        t: 8,
        u: 8,
        v: 8,
        w: 9,
        x: 9,
        y: 9,
        z: 9,
    }

    return words.filter(word => {
        const numberCombination = word.split('').map(letter => combinationMap[letter]).join('')
        return phone.includes(numberCombination)
    })
}

// 2. Bad - complexity 3
function _getWordsToNumbersMapping(phone, words) {
    const combinationMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    return words.filter(word => {
        const numberCombination = word.split('').map(letter => {
            for (let number in combinationMap) {
                if (combinationMap[number].includes(letter)) return number 
            }
        }).join('')

        return phone.includes(numberCombination)
    })
}
