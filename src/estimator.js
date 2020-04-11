// const calculateDataInput = (reportedCases, timetoElapse, periodtype) => {
//   const object = {
//     region: {
//       name: 'AFRICA',
//       avgAge: 27,
//       avgDailyIncomeInUSD: 5,
//       avgDailyIncomePopulation: 0.71
//     },
//     periodType: periodtype,
//     timeToElapse: timetoElapse,
//     reportedCases,
//     population: 1000000,
//     totalHospitalBeds: 231
//   };
//   return object;
// };
const impact = {};
const severeImpact = {};

const displayData = (input) => {
  const impactTotal = input.reportedCases * 10;
  const severeImpactTotal = input.reportedCases * 50;
  let timetoElapse = input.timeToElapse;

  if (input.periodType === 'months') {
    timetoElapse = input.timeToElapse * 30;
  } else if (input.periodType === 'weeks') {
    timetoElapse = input.timeToElapse * 7;
  }
  const currentlyInfectedImpact = impactTotal * (2 ** parseInt(timetoElapse / 3, 10));
  const currentlyInfectedSevere = severeImpactTotal * (2 ** parseInt(timetoElapse / 3, 10));

  impact.currentlyInfected = impactTotal;
  impact.infectionsByRequestedTime = currentlyInfectedImpact;
  severeImpact.currentlyInfected = severeImpactTotal;
  severeImpact.infectionsByRequestedTime = currentlyInfectedSevere;
};
const covid19ImpactEstimator = (data) => {
  displayData(data);
  const result = { data, impact, severeImpact };
  return result;
};


export default covid19ImpactEstimator;
