const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  // Inicializamos la variable para almacenar el miembro más antiguo
  let oldest = xMen[0];
  
  // Recorremos el array de X-Men
  for (const member of xMen) {
    // Comparamos el año de aparición del miembro actual con el más antiguo encontrado
    if (member.year < oldest.year) {
      oldest = member; // Actualizamos al miembro más antiguo
    }
  }

  return oldest; // Retornamos el miembro más antiguo
}

// Probar la función
const oldestXMen = findOldestXMen(xMen);
console.log(`El miembro más antiguo de los X-Men es ${oldestXMen.name}, quien apareció en el año ${oldestXMen.year}.`);
