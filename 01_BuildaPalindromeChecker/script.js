({
    plugins: ["jsdom-quokka-plugin"],
})

const result = document.querySelector('#result');
const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const box1 = document.getElementById('box1');

const cleanWord = (word) => {
    return word.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const evalWord = () => {
    if (textInput.value === '') {
        alert('Please input a value');
    } else {
        palindrome(cleanWord(textInput.value));

    }
}

const palindrome = (word) => {
    let rta = true;

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - i - 1]) {
            rta = false;
            break;
        }
    }

    result.textContent = rta ? `${textInput.value} is a palindrome.` : `${textInput.value} is not a palindrome.`;
    
    const box1Height = parseInt(window.getComputedStyle(box1).height);
    box1.style.height = (box1Height + 20) + 'px';

    textInput.value = '';
    result.style.display = 'block';
}

checkBtn.addEventListener('click', evalWord)