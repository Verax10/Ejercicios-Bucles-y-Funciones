const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  // Comprobamos si el país está en el objeto capitals
  if (capitals[country]) {
    return `La capital de ${country} es ${capitals[country]}.`;
  } else {
    return `No se encuentra información sobre la capital de ${country}.`;
  }
}

// Prueba de la función con diferentes países
console.log(getCapital('Spain')); // La capital de Spain es Madrid.
console.log(getCapital('USA'));   // No se encuentra información sobre la capital de USA.
