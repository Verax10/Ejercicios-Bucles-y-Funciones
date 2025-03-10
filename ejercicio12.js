const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  // Filtrar mutantes que tengan el poder especificado
  const foundMutants = mutants.filter(mutant => mutant.power === power);
  
  // Verificar si se encontraron mutantes con ese poder
  if (foundMutants.length > 0) {
    // Si hay uno o más, mostrar los nombres de los mutantes
    const names = foundMutants.map(mutant => mutant.name).join(', ');
    return `Se encontraron los siguientes mutantes con el poder ${power}: ${names}`;
  } else {
    return `No se encontraron mutantes con el poder ${power}.`;
  }
}

// Ejemplo de uso
console.log(findMutantByPower(mutants, 'telekinesis')); // Buscar por poder 'telekinesis'
console.log(findMutantByPower(mutants, 'flight')); // Buscar por un poder inexistente
