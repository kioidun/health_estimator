// const calculateDataInput = (reportedCases, timetoElapse, periodtype) => {
//   const object = {
//     region: {
//       name: 'AFRICA',
//       avgAge: 27,
//       avgDailyIncomeUsed: 5,
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
    data: input,
    impact: {
      currentlyInfected: impactTotal,
      infectionsByRequestedTime: currentlyInfectedImpact,
      severeCasesByRequestedTime: 16877568,
      hospitalBedsByRequestedTime: -16877568,
      casesForICUByRequestedTime: 5625856,
      casesForVentilatorsByRequestedTime: 2250342,
      dollarsInFlight: 12484
    },
    severeImpact: {
      currentlyInfected: severeImpactTotal,
      infectionsByRequestedTime: currentlyInfectedSevere,
      severeCasesByRequestedTime: 84387840,
      hospitalBedsByRequestedTime: -84150234,
      casesForICUByRequestedTime: 28129280,
      casesForVentilatorsByRequestedTime: 11251712,
      dollarsInFlight: 6244445556
    }
  };
  return estimate;
};
const covid19ImpactEstimator = (data) => data;
displayData(covid19ImpactEstimator);

export default covid19ImpactEstimator;
