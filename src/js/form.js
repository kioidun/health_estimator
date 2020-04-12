
const form = document.getElementById('form');
const dataPopulation = document.getElementById('data-population');
const dataTimeToElapse = document.getElementById('data-time-to-elapse');
const dataReportedCases = document.getElementById('data-reported-cases');
const dataTotalHospitalBeds = document.getElementById('data-total-hospital-beds');
const dataPeriodType = document.getElementById('data-period-type');


const setError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;
  formControl.className = 'form-control error';
};
const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};
function isNumber(first) {
  return /^[0-9]+$/.test(first);
}


function checkInputs() {
  const firstValue = dataPopulation.value.trim();
  const secondValue = dataTimeToElapse.value.trim();
  const thirdValue = dataReportedCases.value.trim();
  const fourthValue = dataTotalHospitalBeds.value.trim();

  if (firstValue === '') {
    setError(dataPopulation, 'field cannot be blank');
  } else if (!isNumber(firstValue)) {
    setError(dataPopulation, 'please enter a digit');
  } else {
    setSuccess(dataPopulation);
  }
  if (secondValue === '') {
    setError(dataTimeToElapse, 'field cannot be blank');
  } else if (!isNumber(secondValue)) {
    setError(dataTimeToElapse, 'please enter a digit');
  } else {
    setSuccess(dataTimeToElapse);
  }
  if (thirdValue === '') {
    setError(dataReportedCases, 'field cannot be blank');
  } else if (!isNumber(thirdValue)) {
    setError(dataReportedCases, 'please enter a digit');
  } else {
    setSuccess(dataReportedCases);
  }
  if (fourthValue === '') {
    setError(dataTotalHospitalBeds, 'field cannot be blank');
  } else if (!isNumber(fourthValue)) {
    setError(dataTotalHospitalBeds, 'please enter a digit');
  } else {
    setSuccess(dataTotalHospitalBeds);
  }
}


const values = () => {
  const data = [dataPopulation.value.trim(), dataTimeToElapse.value.trim(),
    dataReportedCases.value.trim(), dataTotalHospitalBeds.value.trim(),
    dataPeriodType.options[dataPeriodType.selectedIndex].value];
  return data;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  values();
});
