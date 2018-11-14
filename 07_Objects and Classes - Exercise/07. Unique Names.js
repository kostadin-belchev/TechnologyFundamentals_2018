const solve = (input = ['']) =>
  [...new Set(input)].sort((a, b) => (a.length !== b.length ? a.length - b.length : a.localeCompare(b))).join('\n')

console.log(solve(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston']))
