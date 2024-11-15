const VOWELS_SET = new Set(['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']); 


const isVowel = (letter: string) => {
    return VOWELS_SET.has(letter);
}


const reverseVowels = (s: string): string => {

    const stringArray = s.split(''); 

    for(let i = 0, j = s.length - 1; i < j;) {
        const leftLetter = s[i]; 
        const rightLetter = s[j]; 

        if(isVowel(leftLetter) && isVowel(rightLetter)) {
            stringArray[i] = rightLetter;
            stringArray[j] = leftLetter; 
            i++; 
            j--; 
            continue; 
        }

        if(!isVowel(leftLetter)) {
            stringArray[i] = leftLetter; 
            i++; 
        }

        if(!isVowel(rightLetter)) {
            stringArray[j] = rightLetter; 
            j--
        }

        console.log(stringArray); 
    }

    return stringArray.join('')
}

console.log(reverseVowels('icecr')); 