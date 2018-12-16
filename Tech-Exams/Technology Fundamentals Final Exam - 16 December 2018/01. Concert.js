const solve = (inputArray = []) => {
  let controlBandName
  const bands = {}

  for (let i = 0; inputArray.length; i++) {
    const commandsString = inputArray[i]

    if (commandsString === 'start of concert') {
      controlBandName = inputArray[i + 1]
      break
    }
    const [command, bandName, membersStringOrBandTime] = commandsString.split('; ')
    switch (command) {
      case 'Play':
        const bandTime = Number(membersStringOrBandTime)

        if (bands.hasOwnProperty(bandName)) {
          if (bands[bandName].bandTime) {
            bands[bandName].bandTime += bandTime
          } else {
            bands[bandName].bandTime = bandTime
          }
        } else {
          bands[bandName] = {}
          bands[bandName].bandTime = bandTime
        }
        break
      case 'Add':
        const bandMembersNames = membersStringOrBandTime.split(', ')
        if (bands.hasOwnProperty(bandName)) {
          if (bands[bandName].bandMembers) {
            for (const bandMemberName of bandMembersNames) {
              // if not included add it, since this is an array order of insertion is preserved
              if (!bands[bandName].bandMembers.includes(bandMemberName)) {
                bands[bandName].bandMembers.push(bandMemberName)
              }
            }
          } else {
            bandMembersNames

            bands[bandName].bandMembers = [...bandMembersNames]
            bands
          }
        } else {
          bands[bandName] = {}
          bands[bandName].bandMembers = [...bandMembersNames]
        }
        break
      default:
        break
    }
  }

  let sortableBands = []
  let totalBandsTime = 0

  for (let band in bands) {
    bands[band]
    if (bands[band].bandTime) {
      const bandTime = bands[band].bandTime
      totalBandsTime += bandTime
    }
    sortableBands.push([band, bands[band]])
  }

  const orderedBands = sortableBands.sort((a, b) => {
    const bandTimeA = a[1].bandTime
    const bandTimeB = b[1].bandTime

    if (bandTimeA === bandTimeB) {
      // then by band name in ascending order
      return a[0].localeCompare(b[0])
    }
    // ordered by the time on stage in descending order
    return bandTimeB - bandTimeA
  })

  console.log(`Total time: ${totalBandsTime}`)
  for (const band of orderedBands) {
    console.log(`${band[0]} -> ${band[1].bandTime}`)
    
  }
  for (const band of orderedBands) {
    if (band[0] === controlBandName) {
      console.log(band[0])
      for (const member of band[1].bandMembers) {
        console.log(`=> ${member}`)
      }
    }
  }
}

solve([
  'Play; The Beatles; 2584',
  'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
  'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
  'Play; Eagles; 1869',
  'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
  'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
  'Play; The Rolling Stones; 4239',
  'start of concert',
  'The Rolling Stones',
])

// solve([
//   'Add; The Beatles; John Lennon, Paul McCartney',
//   'Add; The Beatles; Paul McCartney, George Harrison',
//   'Add; The Beatles; George Harrison, Ringo Starr',
//   'Play; The Beatles; 3698',
//   'Play; The Beatles; 3828',
//   'start of concert',
//   'The Beatles',
// ])
