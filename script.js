const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.addEventListener('click', checkIfPalindrome);

function checkIfPalindrome(e) {
  if (textInput.value == '') {
    alert('Please input a value');
    return;
  }
  const toCheck = textInput.value.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(toCheck);
  let start = 0,
    end = toCheck.length - 1;
  while (start < end) {
    if (toCheck[start] !== toCheck[end]) {
      result.innerText = `${textInput.value} is not a palindrome.`;
      return;
    }
    start++;
    end--;
  }
  result.innerText = `${textInput.value} is a palindrome.`;
}
