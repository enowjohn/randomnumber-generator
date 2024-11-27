const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');

const min = 1;
const max = 100;
let randomNum;

generateBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.innerHTML = randomNum;
    // console.log(randomNum);

    if(randomNum % 2 === 0) {
        result.style.color = 'green';
    } else {
        result.style.color = 'red';
    }
})








