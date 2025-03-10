const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const groupedByDecade = {};

// Recorremos cada película de Star Wars
for (const movie of starWarsMovies) {
  // Calculamos la década de la película (redondeamos hacia abajo a la decena más cercana)
  const decade = Math.floor(movie.releaseYear / 10) * 10;

  // Si la década aún no existe en el objeto, la inicializamos como un array vacío
  if (!groupedByDecade[decade]) {
    groupedByDecade[decade] = [];
  }

  // Añadimos la película al array correspondiente de su década
  groupedByDecade[decade].push(movie.title);
}

console.log(groupedByDecade);
