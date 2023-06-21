function designerPdfViewer(h, word) {
    let wordArray = word.split("");
    let alphabetIndexes = {};
    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(97 + i); 
        alphabetIndexes[letter] = h[i];
    }
    let max = -Infinity;
    for (let j = 0; j < wordArray.length; j++) {
        if (max <= alphabetIndexes[wordArray[j]]) {
            max = alphabetIndexes[wordArray[j]]
        }
    }
    return max * word.length
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

console.log(designerPdfViewer(h, "abc"))
