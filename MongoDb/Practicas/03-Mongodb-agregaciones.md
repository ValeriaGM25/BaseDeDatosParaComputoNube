
# Agregaciones en MongoBD (Framework)

## Métodos para realizar agregaciones simples 
- distinct(): Devuelve valores no duplicados 
- countDocuments(): Cuenta los documentos en una colección
- estimatedDocument(): Cuenta de manera aproximada durante un periodo del tiempo

## Una Aggregation pipeline
Consta de una o más etapas (stage) que procesan documentos
1. Cada etapa realiza una operación en los documentos de enterada, por ejemplo, una fase puede filtrar documentos, agregar documentos y calcular valores.

2. Los documentos que se generan en una fase pasan a la siguiente fase.

3. Puede devolver resultados para grupos de documentos como totales, máximos, mínimos, etc

### Se utiliza la clausula "aggregate" 
- Existen una serie de operadores que se pueden utilizar para realizar operaciones. Se tienen distintos tipos: etapa, comparación, booleanos, aritméticos, de cadena, etc. 

## Métodos Simples: countDocuments() y distinct()
1. Contar los documentos de la colección libros
```json
db.libros.countDocuments()
```

2. Contar los documentos de la editorial "terra"
```json
db.libros.countDocuments({editorial: {$eq:'Terra'}})
```

3. Seleccionar o mostrar todos los libros mostrando soñ

4. Mostrar todas las distintas editoriales
```json
db.libros.count
```

[Documentación de Agregaciones](https://www.mongodb.com/docs/manual/aggregation/)

## $match. Una pipeline básica

### Tienen funciones de etapa
```json
db.libros.aggregate(
    [
        {
        $match:{editorial:"Terra"}
        }
    ]
)
```

## $project. Incluir y renombrar campos

```json
db.libros.aggregate(
    [
        {
            $match:{editorial:'Terra'}
        },
        {
            $project:{
                _id:0,
                titulo:1,
                precio:1,
                NombreEditorial:"$editorial",
                editorial:1
            }
        }
    ]
)
```


# Crear campo calculado con project y match

```json
[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        editorial: "Terra"
      }
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        _id: 0,
        titulo: 1,
        precio: 1,
        cantidad: 1,
        "Nombre Editorial": "$editorial",
        "Total De Ganancias": {
          $multiply: ["$precio", "$cantidad"]
        }
      }
  }
]
```

## $sort. Ordenaciones 
1. Ordenar el ejercicio anterior de mayor a menor por el precio
```json
[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        editorial: "Terra"
      }
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        _id: 0,
        titulo: 1,
        precio: 1,
        cantidad: 1,
        "Nombre Editorial": "$editorial",
        "Total De Ganancias": {
          $multiply: ["$precio", "$cantidad"]
        }
      }
  },
  {
    $sort:
      /**
       * Provide any number of field/order pairs.
       */
      {
        precio: 1
      }
  }
]
```

## $group. Agrupaciones
[Agrupaciones](https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/)


-- Cuantos documentos hay por cada una de las editoriales
```json
{
  _id: "$editorial",
  "Numero Documentos": {
   $count: {}
  }
}
```

-- Cuantos documentos hay por cada una de la editoriales por cada numero de documentos de manera descendente


-- Agrupar por tipo de propiedad mostrando el numero de propiedades y el promedio de sus precios
-- Utilizando Mongo Atlas BD sample_airbnb

```json
{
  _id:"property_type"
  Numero:{
    $count: {}
  },
  Media: {
    $avg:'$price'
  }
}
```

-- Operadores Set 
-- usando $set
```json
{
  Media_Total:{
    $trunc:'$Media'
  }
}
```
-- Operador $unset

```json
['Media'
'Media_Total']
```
- Quitando solo un campo

```json
'Media'
```
### Creando nuevas conexiones utilizando el operador $out
- Nota debe de ser el ultimo de la agregación
```json
{
  db: 'sample_airbnb',
  coll: 'media_propiedad',
  /*
  timeseries: {
    timeField: 'field',
    bucketMaxSpanSeconds: 'number',
    granularity: 'granularity'
  }
  */
}
```

- Ejemplo con operadores de comparación y lógicos
```json
/**
 * specifications: The fields to
 *   include or exclude.
 */
{
  _id:0,
  price:1,
  name:1,
  room_type:1,
  caro:{
    $gt:["$price", 300]
  },
  media:{
    $and:[
      {$gt:["$price", 100]},
      {$lte:["$price", 300]}
    ]
  },
  baratito:{
    $lt:["$price",100]
  }
}
```

- Operador $cond, devuelve valores segun una condicion (es parecido a un operador ternerio de una lenguaje de programacipón)
```json
/**
 * specifications: The fields to
 *   include or exclude.
 */
{
  _id:0,
  price:1,
  name:1,
  room_type:1,
  caro:{
   $cond:[
     { $gt:["$price",300]},"Si","No"
   ]
  },
  media:{
    $cond:[{
    $and:[
      {
        $gt:["$price", 100]
      
    	},
      {
        $lte:["$price", 300]
      }
    ]
    
    },
    
    "Si","No"
    ]
  },
  baratito:{
    $cond:[{$lt:["$price",100]},"Si","No"]  
  }
}
```
- Views
```json
db.createView("ganancias_libros","libros",
[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {}
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        _id: 0,
        titulo: 1,
        precio: 1,
        cantidad: 1,
        "Nombre editorial": "$editorial",
        "Total de ganancias": {
          $multiply: ["$precio", "$cantidad"]
        }
      }
  },
  {
    $sort:
      /**
       * Provide any number of field/order pairs.
       */
      {
        "Total ganancias": -1
      }
  }
]
)
```

```json
db.ganancias_libros.find({"Total de ganancias":{$gte:240}},{titulo:1, "Total de ganancias":1}).sort({titulo: -1})
```