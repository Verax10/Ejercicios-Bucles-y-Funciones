const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const categorizedTracks = {};

// Recorremos las canciones
for (const track of tracks) {
  // Si el género no existe aún en el objeto, lo inicializamos con un array vacío
  if (!categorizedTracks[track.genre]) {
    categorizedTracks[track.genre] = [];
  }

  // Añadimos el título de la canción al array correspondiente a su género
  categorizedTracks[track.genre].push(track.title);
}

console.log(categorizedTracks);
