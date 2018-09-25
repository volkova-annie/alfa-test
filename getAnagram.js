const str = 'адрес карп кума куст мир мука парк среда стук рост сорт трос';

function getAnagrams(str) {
	let result = [];

	if (!str)
		return result;

	let wordsOrigArr = str.split(' ');

	if (wordsOrigArr.length <= 1) {
		return result;
	}

	let wordsArr = wordsOrigArr.map((value, key) => {
		const val = value.split('').sort().join('').toLowerCase(); // sort by letters  карп ->  акрп // ['a', 'к', 'р', 'п']
		return {index: key, word: val};
	}) //[{},{}]

	wordsArr.sort((a, b) => {
		let compareByLength = a.word.length - b.word.length;
		return compareByLength == 0 // same length
			? a.word.localeCompare(b.word)
			: compareByLength
		}); // sort by length then lexigraphicaly

	let currAnagrams = wordsOrigArr[wordsArr[0].index]; // store original word
	let notEmpty = false;
	for (let i = 1; i < wordsArr.length; i++) {
		if (wordsArr[i].word ===  wordsArr[i - 1].word) { // compare current with prev
			currAnagrams += '-' + wordsOrigArr[wordsArr[i].index]; // store original word
			notEmpty = true;
		} else {
			if (notEmpty) {
				result.push(currAnagrams);
			}
			currAnagrams = wordsOrigArr[wordsArr[i].index]; // store original work
			notEmpty = false;
		}
	}

	if (notEmpty) {
		result.push(currAnagrams);
	}

	return result;
}

getAnagrams(str);
