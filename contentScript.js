// contentScript.js
const connectButtons = document.querySelectorAll('button');

connectButtons.forEach(button => {
  if (button.innerText.includes('Connect')) {
    button.click();
    console.log('Connection request sent.');
  }
});
