document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();
const email = document.getElementById('username').value.trim();
  const resultCont = document.getElementById('resultCont');

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (regex.test(email)) {
  resultCont.textContent = `"${email}" is a valid email address.`;
  resultCont.style.color = 'green';
} else {
  resultCont.textContent = `"${email}" is not a valid email address.`;
  resultCont.style.color = 'red';
}

});
