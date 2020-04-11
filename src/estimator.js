// eslint-disable-next-line max-len
// const calculateDataInput = (reportedCases, timetoElapse, periodtype, hospitalBeds, averageUsd, averagePopulation) => {
//   const object = {
//     region: {
//       name: 'AFRICA',
//       avgAge: 27,
//       avgDailyIncomeInUSD: averageUsd,
//       avgDailyIncomePopulation: averagePopulation
//     },
//     periodType: periodtype,
//     timeToElapse: timetoElapse,
//     reportedCases,
//     population: 1000000,
//     totalHospitalBeds: hospitalBeds
//   };
//   return object;
// };
const impact = {};
const severeImpact = {};

const displayData = (input) => {
  const impactTotal = input.reportedCases * 10;
  const severeImpactTotal = input.reportedCases * 50;
  let timetoElapse = input.timeToElapse;
  const hospitalbeds = input.totalHospitalBeds;
  const averageDailyIncome = input.region.avgDailyIncomeInUSD;
  const averageDailyIncomePopulation = input.region.avgDailyIncomePopulation;

  if (input.periodType === 'months') {
    timetoElapse = input.timeToElapse * 30;
  } else if (input.periodType === 'weeks') {
    timetoElapse = input.timeToElapse * 7;
  }
  const currentlyInfectedImpact = impactTotal * (2 ** parseInt(timetoElapse / 3, 10));
  const currentlyInfectedSevere = severeImpactTotal * (2 ** parseInt(timetoElapse / 3, 10));
  const severeCasesByRequestedTimeImpact = Math.trunc((15 / 100) * currentlyInfectedImpact);
  const numberofhospitalbeds = Math.trunc(hospitalbeds * (35 / 100));
  const hospitalBedsByRequestedTimeImpact = numberofhospitalbeds - severeCasesByRequestedTimeImpact;
  const casesForICUByRequestedTimeImpact = Math.trunc((5 / 100) * currentlyInfectedImpact);
  const casesForVentilatorsByRequestedTimeImpact = Math.floor((2 / 100) * currentlyInfectedImpact);
  const severeCasesByRequestedTimeSevere = Math.trunc((15 / 100) * currentlyInfectedSevere);
  const hospitalBedsByRequestedTimeSevere = numberofhospitalbeds - severeCasesByRequestedTimeSevere;
  const casesForICUByRequestedTimeSevere = Math.trunc((5 / 100) * currentlyInfectedSevere);
  const casesForVentilatorsByRequestedTimeSevere = Math.trunc((2 / 100) * currentlyInfectedSevere);
  const dollarsInFlightImpact = Math.trunc((currentlyInfectedImpact
    * averageDailyIncomePopulation * averageDailyIncome) / timetoElapse);
  const dollarsInFlightSevere = Math.trunc((currentlyInfectedSevere
    * averageDailyIncomePopulation * averageDailyIncome) / timetoElapse);

  impact.currentlyInfected = impactTotal;
  impact.infectionsByRequestedTime = currentlyInfectedImpact;
  impact.severeCasesByRequestedTime = severeCasesByRequestedTimeImpact;
  impact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTimeImpact;
  impact.casesForICUByRequestedTime = casesForICUByRequestedTimeImpact;
  impact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTimeImpact;
  impact.dollarsInFlight = dollarsInFlightImpact;
  severeImpact.currentlyInfected = severeImpactTotal;
  severeImpact.infectionsByRequestedTime = currentlyInfectedSevere;
  severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTimeSevere;
  severeImpact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTimeSevere;
  severeImpact.casesForICUByRequestedTime = casesForICUByRequestedTimeSevere;
  severeImpact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTimeSevere;
  severeImpact.dollarsInFlight = dollarsInFlightSevere;
};
const covid19ImpactEstimator = (data) => {
  // eslint-disable-next-line no-param-reassign
//   data = calculateDataInput(2747, 38, 'days', 678874, 4, 0.73);
  displayData(data);
  const result = { data, impact, severeImpact };
  return result;
};


export default covid19ImpactEstimator;
