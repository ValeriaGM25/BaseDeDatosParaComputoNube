// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Pruebaplay');

// Create a new document in the collection.
db.getCollection('alumnos').insertOne({
nombre: 'Atantle',
edad: 150,
nacionalidad: 'Peruano',
especialidad: 'Miches'
});
