const solve = (input = ['']) => {
  let movies = []
  for (const inputString of input) {
    if (inputString.startsWith('add movie')) {
      const movieName = inputString.substr('add movie '.length)
      movies.push({ name: movieName, director: undefined })
    } else if (inputString.includes('directed by')) {
      const [ movieName, movieDirector ] = inputString.split(' directed by ')
      movies.map(movie => movie.name === movieName ? movie.director = movieDirector : movie.director);
    } else {
      const [ movieName, movieDate ] = inputString.split(' on date ')
      movies.map(movie => movie.name === movieName ? movie.date = movieDate : movie.date)
    }
  }
  return movies.filter(movie => movie.name && movie.director && movie.date).map(movie => JSON.stringify(movie)).join('\n')
}

console.log(solve(['add movie Fast and Furious',
'add movie Godfather',
'Inception directed by Christopher Nolan',
'Godfather directed by Francis Ford Coppola',
'Godfather on date 29.07.2018',
'Fast and Furious on date 30.07.2018',
'Batman on date 01.08.2018',
'Fast and Furious directed by Rob Cohen']))
// {"name":"Fast and Furious","director":"Rob Cohen","date":"30.07.2018"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
