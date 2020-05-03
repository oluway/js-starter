import app from './app';

const verify = document.getElementById('verify');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};

const clickme = () => {
  // eslint-disable-next-line no-console
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.classList = 'loader';
  setTimeout(() => {
    section3.classList = 'noloader';
    section2.style.display = 'inline';
    section2.innerHTML = '<div class="text-center">Enter Tender Number/Reference <br><br> <input type="text" /><br> <input type="button" class="btn btn-primary" id="validate" value="Verify"/></div>';
    section3.classList = 'olu';
  }, 3000);
};

document.addEventListener('DOMContentLoaded', startApp);
verify.addEventListener('click', clickme);
