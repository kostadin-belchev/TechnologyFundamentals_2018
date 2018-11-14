const solve = (input = []) => {
  const [initialFlightData, changedFlightData, flag] = input
  const flightsObj = {}

  for (const flightData of initialFlightData) {
    const [flightNumber, flightDestination] = flightData.split(' ')
    flightsObj[flightNumber] = { Destination: flightDestination, Status: 'Ready to fly' }
  }

  for (const flightChangeData of changedFlightData) {
    const [flightNumber, status] = flightChangeData.split(' ')
    if (flightsObj.hasOwnProperty(flightNumber)) {
      flightsObj[flightNumber].Status = status
    }
  }

  Object.keys(flightsObj).map(key => (flightsObj[key].Status === flag[0] ? console.log(flightsObj[key]) : null))
}

// solve([
//   [
//     'WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania',
//   ],
//   ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
//   ['Cancelled'],
// ])

solve([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
  ['Ready to fly'],
])
