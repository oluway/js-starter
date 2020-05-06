import app from './app';
import TenderService from './Services/TenderService';

const verify = document.getElementById('verify');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const openTenderContent = document.getElementById('openTender');
const headerText = document.getElementById('header');
const cardTitle = document.querySelector('.card-title');
const date = document.getElementById('date');
const mylist = document.getElementById('mylist');
const department = document.getElementById('department');
const winner = document.getElementById('winner');

const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};
function startLoaderEffect() {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.classList = 'loader';
}
function stopLoaderEffect() {
  section3.classList = 'noloader';
}
/* function openTender(tenderobj) {
  const { id, ...rest } = tenderobj;
  startLoaderEffect();
  setTimeout(() => {
    if (id !== null) {
      stopLoaderEffect();
      headerText.style.display = 'none';
      openTenderContent.style.display = 'inline';
      cardTitle.innerHTML = `Tender Number: ${rest.tenderNumber}`;
      date.innerHTML = new Date();
     const departmentData = `<ul><li>Name Of Institution: ${rest.nameOfInstitution}</li>
     <li>Offical Location: ${rest.officalLocation}</li><li>Contact Person: Name</li>
     <li>Phone Number: 000 000 000</li><li>Email Address: test@gmail.com</li></ul>`;

      const data = `<ul><li>Tender Status: <b>OPEN TENDER</b></li>
      <li>Tender Description: ${rest.tenderDescription}</li>
      <li>Tender Category: ${rest.category}</li><li>Date Published: ${rest.datePublished}</li>
      <li>Closing Date: ${rest.closingDate}</li></ul>`;
      mylist.innerHTML = data;
      department.innerHTML = departmentData;
    }
  }, 900);
} */
function closedTender(tenderobj) {
  const { id, ...rest } = tenderobj;
  startLoaderEffect();
  setTimeout(() => {
    if (id !== null) {
      stopLoaderEffect();
      headerText.style.display = 'none';
      openTenderContent.style.display = 'inline';
      cardTitle.innerHTML = `Tender Number: ${rest.tenderNumber}`;
      date.innerHTML = new Date();
      const winnerText = `<ul><li>Tender awarded to: ${rest.companyName}</li>
      <li>Tender Point Score: 87%</li>
      <li>Company RegistrationNo: ${rest.companyRegistrationNo}</li>
      <li>Registered Date: 4/10/2019</li><li>Directors: ${rest.directors}</li>
      <li>Phone Number: ${rest.cellNumber}</li>
      <li>Company Address: ${rest.companyAddress}</li>
      </ul>`;

      const departmentData = `<ul><li>Name Of Institution: ${rest.nameOfInstitution}</li>
      <li>Offical Location: ${rest.officalLocation}</li><li>Contact Person: Name</li>
      <li>Phone Number: 000 000 000</li>
      <li>Email Address: test@gmail.com</li></ul>`;

      const data = `<ul><li>Tender Status: <b>AWARDED TENDER</b></li>
      <li>Tender Description: ${rest.tenderDescription}</li>
      <li>Tender Category: ${rest.category}</li>
      <li>Date Published: ${rest.datePublished}</li>
      <li>Closing Date: ${rest.closingDate}</li></ul>`;

      mylist.innerHTML = data;
      department.innerHTML = departmentData;
      winner.innerHTML = winnerText;
    }
  }, 900);
}

const clickme = () => {
  startLoaderEffect();
  setTimeout(() => {
    section3.classList = 'noloader';
    section2.style.display = 'inline';

    section2.innerHTML += "<center class='textinput'><b>Enter Tender Reference Number</b> <br> <input type='text' id='textid' name='subdomain' required /></center>";
    section3.classList = 'olu';
    const mybtn = document.createElement('button');
    mybtn.type = 'button';
    mybtn.innerText = 'Verify';
    mybtn.id = 'validateTender';
    mybtn.className = 'mybtn btn btn-primary';
    mybtn.onclick = (() => {
      startLoaderEffect();
      mybtn.style.display = 'none';
      const inputValue = document.getElementById('textid').value;
      const EncodedText = inputValue.replace(/\//g, '%2F');
      TenderService.getTender(EncodedText).then((response) => {
        closedTender(response);
      });
    });
    document.body.appendChild(mybtn);
  }, 3000);
};
document.addEventListener('DOMContentLoaded', startApp);
verify.addEventListener('click', clickme);
