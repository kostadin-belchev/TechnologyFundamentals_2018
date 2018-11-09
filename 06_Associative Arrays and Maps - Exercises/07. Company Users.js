const solve = (input = ['']) => {
  const companyNamesToEmployeesIds = new Map()
  for (const inputString of input) {
    const [company, employeeId] = inputString.split(' -> ')
    if (!companyNamesToEmployeesIds.has(company)) {
      companyNamesToEmployeesIds.set(company, new Set())
    }
    const currCompanyEmployeesSet = companyNamesToEmployeesIds.get(company)
    currCompanyEmployeesSet.add(employeeId)
  }
  const result = [...companyNamesToEmployeesIds].sort((a, b) => {
    const aName = a[0]
    const bName = b[0]
    return aName.localeCompare(bName)
  })

  for (const item of result) {
    item
    console.log(item[0])
    for (const id of item[1]) {
      console.log(`-- ${id}`)
    }
  }
}

solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])
