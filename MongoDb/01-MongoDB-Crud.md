
# CRUD y consultas en MONGODB



#Crear una DB 

Solo se crea una coleccion 

##Como se crea una coleccion

**use bd1**
db.creatColecction('Empleados')
show collections 


#Como inserter un Documento

json
db.alumnos.insertOne(
{ 
    nombre: Soyla, 
    apellido: Vaca, 
    edad: 32, 
    ciudad: San miguel

})

##Insercion de documentos de un documento mas complejo con array

db.alumnos.insertOne(
{
nombre: 'Joaquin',
apellido: 'Dorian',
apellido2: 'Guerrero',
edad: 15,
aficiones: [
        'Cerveza', 'Hueva', 'Canabis'
 ]
})

##Insercion de doc más complejos con doc anidados y ID
json
db.alumnos.insertOne(
 {
nombre: 'Valeria',
apellido1: 'Galindo',
apellidp2: 'Marin',
edad: 19,
estudios: [
            'Ing en Sistemas Computacionales',
        'Maestria en Tecnologias de la informacion',
           ],
 experiencia: {
                lenguaje: 'SQL',
             sbd: 'SQL SERVER',
               aniosExp: 14
 }
 })



 db.alumnos.insertOne(
    {
        _id:3,
        nombre: 'Sergio',
        apellido: 'Ramos',
        equipo: 'Moterrey',
        aficiones: ['Dinero','Hombres','Fiestas'],
        talentos:{
            futbol: true,
            bañarse: false
        }
    }

 )


 ##Inserter multiple documentos 

 db.alumnos.insertOne(
... {
... nombre: 'Valeria',
... apellido1: 'Galindo',
... apellidp2: 'Marin',
... edad: 19,
... estudios: [
...              'Ing en Sistemas Computacionales',
...              'Maestria en Tecnologias de la informacion',
...             ],
... experiencia: {
...                 lenguaje: 'SQL',
...                 sbd: 'SQL SERVER',
...                 aniosExp: 14
... }
... }
... )
{
  acknowledged: true,
  insertedId: ObjectId('679d2f040d3cb6a591cb0ce4')
}
bdejemplo> db.alumnos.find({})
[
  {
    _id: ObjectId('679d2a400d3cb6a591cb0ce2'),
    nombre: 'Soyla',
    apellido: 'Vaca',
    edad: 32,
    ciudad: 'San miguel'
  },
  {
    _id: ObjectId('679d2c720d3cb6a591cb0ce3'),
    nombre: 'Joaquin',
    apellido: 'Dorian',
    apellido2: 'Guerrero',
    edad: 15,
    aficiones: [ 'Cerveza', 'Hueva', 'Canabis' ]
  },
  {
    _id: ObjectId('679d2f040d3cb6a591cb0ce4'),
    nombre: 'Valeria',
    apellido1: 'Galindo',
    apellidp2: 'Marin',
    edad: 19,
    estudios: [
      'Ing en Sistemas Computacionales',
      'Maestria en Tecnologias de la informacion'
    ],
    experiencia: { lenguaje: 'SQL', sbd: 'SQL SERVER', aniosExp: 14 }
  }
]
bdejemplo>  db.alumnos.insertOne(
...     {
...         _id:3,
...         nombre: 'Sergio',
...         apellido: 'Ramos',
...         equipo: 'Moterrey',
...         aficiones: ['Dinero','Hombres','Fiestas'],
...         talentos:{
...             futbol: true,
...             bañarse: false
...         }
...     }
...
...  )
{ acknowledged: true, insertedId: 3 }
bdejemplo> db.alumnos.find({_id:3})
[
  {
    _id: 3,
    nombre: 'Sergio',
    apellido: 'Ramos',
    equipo: 'Moterrey',
    aficiones: [ 'Dinero', 'Hombres', 'Fiestas' ],
    talentos: { futbol: true, 'bañarse': false }
  }
]
bdejemplo> db.alumnos.insertMany(
[
{
      _id: 12,
           nombre: 'Roberto',
     apellido: 'Gomez',
    edad: 23,
    descripcion: 'Es un comediante bueno'
 },
{
   nombre: 'Luis',
       apellido: 'Suarez',
   edad: 43,
    habilidades: [
                 'Correr','dormir','Morder'
 ],
 direcciones: {
                calle: 'Del infierno',
                numero: 666
 },
 esposas:[
          {
            nombre: 'Marisol',
             edad: 20,
           pension: 350,
       hijos: ['Joaquin', 'Bridget']
 },
 {
            nombre: 'Dorien',
            edad: 46,
            pension: 65000.56,
            complaciente: true
 }
]
}
])

## Practica1

##Cargar Datos

[libros.json](./data/empleados.json)
[empleados.json](./data/libros.json)

## Busquedas. Condiciones Simples de Igualdad. Metodo find()

1. Seleccionar todos los documentos de la colleccion libros
```json
db.libros.find({})
```
2. Mostrar todos los documentos que sean de la editorial Biblio
```json
db.libros.find({editorial:'Biblio'})
```
3. Mostrar todos los documentos en los que el precio sean 25
```json
```

4. Seleccionar todos los documento donde el titulo sea json para todos
```json

db.libros.find({ titulo: 'JSON para todos',})

```
## Operadores de comparacion

[Operadores de comparacion](https://www.mongodb.com/docs/manual/reference/operator/query/)

![Operadores de copararacion](./img/operadoresComparacion.png)

1. Mostrar todos los docs donde el precio sea mayor a 25.

```json

db.libros.find({precio: {$gt:25}})

```

2. Mostrar los docs donde el precio sea 25.
```json

db.libros.find({precio: {$eq:25}})

```

3. Mostrar los docs cuya cantidad sea menor a 5
```json

db.libros.find({cantidad: {$lt:5}})

```

4. Mostrar los docs que pertenezcan a la editorial Biblio o Planeta
```json

db.libros.find({editorial: {$in:[ 'Biblio','Planeta']}})

```
5. Mostrar todos los docs de libros que cuesten 20 o 25
```json

db.libros.find({precio: {$in:[ 20, 25]}})

```
6. Mostar todos los docs de libros que cuesten 20 o 25
```json

db.libros.find({precio: {$nin:[ 20, 25]}})

```
7. Mostrar el primer doc de libros que cueste 20 o 25
```json

db.libros.findOne({
  precio: {$in:[ 20, 25]}})
```
## Operadores Logicos

[Operadores Logicos](https://www.mongodb.com/docs/manual/reference/operator/query/)

![Operadores de copararacion](./Img/OperadoresLogicos.png)

### Operador AND

Dos posibles operaciones de AND
1. La simple, mediante condiciones separadas por comas

**sintaxis**

db.collection.find({condicion1, condicion2}) -> Asume que es una **AND**

2. Usando el operador AND 

**sintaxis**

db.collection.find({$and:[{condicion1},{condicion2}]})

### Ejercicicos 

1. Mostrar todos aquellos libros que cuesten mas de 25 y cuya cantidad sea inferior a 15

**Forma Simple**
```json

db.libros.find(
{
  precio: {$gt:25},
  cantidad:{$lt:15}
}
)
```
**Con AND**
```json

db.libros.find(
{
  $and:[{precio: {$gte:25}},
 {cantidad:{$lt:15}}]
 
}
)
```

2. Mostrar todos aquellos libros que cuesten mas de 25 y cuya cantidad sea inferior a 15 y id igual 4
**Forma Simple**
```json

db.libros.find(
{
  precio: {$gt:25},
  cantidad:{$lt:15},
  _id:{$eq:4}
}
)
```
**Con AND**

```json

db.libros.find(
{
  $and:[{precio: {$gt:25}},
  {cantidad:{$lt:15}},
  {_id:{$eq:4}}]
}
)
```


### Operador Or

#### Mostrar todos aquellos libros que cuesten mas de 25 a cuya cantidad que sea inferior a 15

```json

db.libros.find( { $or: [ { precio: { $gt: 25 } }, { cantidad: {$lt : 15} } ] } )

```

### AND y OR Combinadas

#### Mostrar los libroos de la editorial Biblio con precio mayor a 40 o libros de la editorial PLaneta con precio mayor a 30

```json
db.libros.find( {
    $or: [
        { $and: [ { editorial: 'Biblio' }, { precio : { $gt: 40 } } ] },
        { $and: [ { editorial: {$eq: 'Planeta'} }, { precio : { $gt : 30 } } ] }
    ]
} )
```
**Forma Simple**

```json
db.libros.find( {
    { editorial: 'Biblio' }, { precio : { $gt: 40 } } ,
     { editorial: {$eq: 'Planeta'} }, { precio : { $gt : 30 } } 
} )
```


## Proyeccion de columnas 

***sintaxis***
db.collections.find(filtro, columnas)

db.libros.find({}, {titulo:1})

1. Seleccionar los documentos, mostrar el título y la editorial

```json
db.libros.find({}, {titulo:1, editorial: 1})

db.libros.find({}, {titulo:1, editorial: 1, _id:0})
```

2. Seleccionar todo los docs de la editorial Planeta, mostrando solamente el titulo y la editorial
```json
db.libros.find({}, {titulo:1, editorial:' Planeta'})

db.libros.find({}, {titulo:1, editorial:' Planeta', _id:0})
db.libros.find({}, {titulo:1, editorial: 1, _id:0})
```



#### Operador exists (Peromite SABER SI UN CAMPO SE ENCUENTRA O NO EN UN)
```json
db.libros.InsertOne({_id:10, titulo: 'Mongo entornos graficos', editorial: 'Tierra', precio: 125})
```

1.Mostrar los docs que no contengan el campo cantidad

```json
db.libros.find({ cantidad:{$exists:false}})
```


#### Operador Type (Permite preguntar si un determinado campo corresponde con un tipo) 

[Operador Type](https://www.mongodb.com/docs/manual/reference/operator/query/type/#mongodb-query-op.-type)

1. Mostrar todos los docs donde el precio sean Dosposibles

```json
db.libros.find({precio:{$type:1}})
db.libros.find({precio:{$type:16}})
```

db.libros.insertOne({
  _id:11,
  titulo:'IA',
  editorial:'Terra',
  precio:125.4,
  cantidad:20
})

2. Seleccionar los docs donde el precio sea de tipo entero
db.libros.find({precio:{$type:1}}, {_id:0})

db.libros.insertMany([
 {
    _id: 12,
    titulo: 'IA',
    editorial: 'Terra',
    precio: 125,
  cantidad: 20
  },
  {
    _id: 13,
    titulo: 'Python para todos',
    editorial: 2001,
    precio: 200,
  cantidad: 30
  }]
  )

db.libros.find({precio:{$type:1}}, {_id:0, cantidad:0})


3. Seleccionar todos los docs donde la editorial sea String

db.libros.find({editorial:{$type:2}})

db.libros.find({editorial:{$type:'string'}})


2.Cargar al json empleandos (Debemos estar ubicados en la carpeta donde se encuentra el json empleados)

mongoimport --db curso  --collection empleados --file empleados.json

- En local
    Comando: 
    mongoimport --db  curso --collection empleados --file empleados.json
    Docker:
    mongoimport --db curso --collection empleados --file empleados.json --port 27018 

    # Modificar Docs
    ## Comandos importantes
  
1. update -> Modificar un solo doc
2. update -> Modificar multiplea dcs
3. replaceOne -> Sustituir el contenido completo de su doc
Tiene el siguiente formato:
```json
db.collection.updateOne(
{filter},
{operador:}
)
```

[Operadores Update](https://www.mongodb.com/docs/manual/reference/operator/update/)
### Operador set

1. Modificar un doc
```json
db.libros.updateOne({titulo:'Python para Todos'}, {$set:{titulo:'Java para todos'}})

```
2. Actualizar el precio a 100 y la cantidad a 50 para el _id:10
```json
db.libros.updateOne({_id:10},{$set:{precio:100, catidad :50}})

```
#### Modificar multiples docs

-- Modificar todos los docs donde el precio sea mayor a 100 a un precio de 150

```json
db.libros.updateMany(
  {precio:{$gt:100}},
{$set:{precio:150}}
)
```

2. Operador $inc y $mul


-- Actualizar con un incremento de cinco todos los docs
```json
db.libros.updateMany({{}, {$inc:}})
```


db.libros.updateOne({_id:2},{$set:{precio:56, existencia:10}})



-- Actualizar conn multiplicacion de 2 todos los docs que la cantidad sea mayores a 20
```json
db.libros.updateMany({cantidad: {$gt:20}, {$mul:{cantidad:2}}})
```
-- Actualizar todos los docs donde el precio sea mayor a 20 y se multiplique por 2 la cantidad y el precio
```json
db.libros.updateMany({precio: {$gt:20}}, {$mul:{cantidad:2, precio:2}} )
```
3.Remplazar docs (docs completos replaceOne)
```json
db.libros.replaceOne({_id:2},{titulo:'De la Tierra a la Luna'},{autor:'Julio Verne'},{precio:20})
```

# Borrar documentos

1. deleteOde -> elimina un solo documento
2. deleteMany -> Elimina multiple documentos

1. Eliminar el doc con id

db.libros.deleteOne({_id:2})

2. Eliminar los docs donde la cantidad se mayor o igual a 150
db.libros.deleteMany({cantidad:{$gt:150}})

## Expresiones Regulares

1. Buscar los libros que contengan en el titulo la letra t
db.libros.find({titulo:/t/})

2. Buscar los libros que en el titulo contengan la palabra json
db.libros.find({titulo:/JSON/})

3. Buscar todos los documentos que en titulo termine en tos
db.libros.find({titulo:/tos$/})

4. Buscar todos los documentos que en titulo comience con J
db.libros.find({titulo:/^J/})

# Operador $regex
(Operador regex)[https://www.mongodb.com/docs/manual/reference/operator/query/regex/]

- Seleccionar los libros que contengan la palabra para en titulo

db.libros.find({titulo:{$regex:'para'}})

db.libros.find({titulo:{$regex:'JSON'}})

db.libros.find({titulo:{$regex:/JSON/}})

- Distinguir entre mayusculas y minusculas

db.libros.find({titulo:{$regex:/json/}}) ->No distingue entre mayusculas y minusculas

db.libros.find({titulo:{$regex:/json/, $options:"i"}})

--Seleccionar todos los libros que comiencen con j o J
db.libros.find({titulo:{$regex:/^J/}})

--Seleccionar todos los libros que terminen es
db.libros.find({titulo:{$regex: 'es$', $options:'i'}})


# Metodos sort (Ordenar documentos)

1. Ordenar los libros de manera acndente por el precio

db.libros.find({},{titulo:1, precio:1, _id:0}).sort({precio:1})

2. Ordenar los libros de manera decendente por el precio

db.libros.find({},{titulo:1, precio:1, _id:0}).sort({precio:-1})

3. Ordenar los libros de manera acendente  por la editorial y de mandera decendete por el precio, 
    mostrando el titulo, el precio y la editorial
db.libros.find({},{titulo:1, precio:1, editorial:1, _id:0}).sort({editorial:1},{precio:-1})

# Otros metodos skip, limit, size

db.libros.find({},{titulo:1, precio:1, _id:0, editorial:1}).size()

db.libros.find({titulo:{$regex:/java/i}}).size()

-- Buscar los libros pero mostrando los dos primeros

db.libros.find({},{titulo:1, editorial:1, precio:1, _id:0}).limit(2)

-- Mostrar los 3 ultimos libros 
db.libros.find({},{titulo:1, editorial:1, precio:1, _id:0}).sort({precio:-1}).limit(3)

db.libros.find({},{titulo:1, editorial:1, precio:1, _id:0})


--primeros docs y mostrando el size, odenados decendente
db.libros.find({},{titulo:1, editorial:1, precio:1, _id:0}).sort({titulo:-1}).skip(2).size()


# Borrar colecciones y bases de datos
use db5
db.db.createCollection('ejemplo')
show Collections
db.ejemplo.insertOne({nombre:'Chapuin'})
 db.ejemplo.drop()
 db.dropDatabase()

