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

const displayData = (input) => {
  const impactTotal = input.reportedCases * 10;
  const severeImpactTotal = input.reportedCases * 50;
  let timetoElapse = input.timeToElapse;
  let currentlyInfectedImpact;
  let currentlyInfectedSevere;

  if (input.periodType === 'days') {
    currentlyInfectedImpact = impactTotal * (2 ** parseInt(timetoElapse / 3, 10));
    currentlyInfectedSevere = severeImpactTotal * (2 ** parseInt(timetoElapse / 3, 10));
  } else if (input.periodType === 'month') {
    timetoElapse = input.timeToElapse * 30;
    currentlyInfectedImpact = impactTotal * (2 ** parseInt(timetoElapse / 3, 10));
    currentlyInfectedSevere = severeImpactTotal * (2 ** parseInt(timetoElapse / 3, 10));
  } else if (input.periodType === 'weeks') {
    timetoElapse = input.timeToElapse * 7;
    currentlyInfectedImpact = impactTotal * (2 ** parseInt(timetoElapse / 3, 10));
    currentlyInfectedSevere = severeImpactTotal * (2 ** parseInt(timetoElapse / 3, 10));
  }

  const estimate = {
    impact: {
      currentlyInfected: impactTotal,
      infectionsByRequestedTime: currentlyInfectedImpact,
      periodType: input.periodType,
      population: input.population,
      region: {
        avgAge: 19.7,
        avgDailyIncomeInUSD: 3,
        avgDailyIncomePopulation: 0.63,
        name: 'Africa'
      },
      severeImpact: {
        currentlyInfected: severeImpactTotal,
        infectionsByRequestedTime: currentlyInfectedSevere
      }
    }
  };
  return estimate;
};
const covid19ImpactEstimator = (data) => data;
displayData(covid19ImpactEstimator);

export default covid19ImpactEstimator;
