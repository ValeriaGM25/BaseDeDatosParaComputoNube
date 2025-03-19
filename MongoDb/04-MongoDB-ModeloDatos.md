# Modelo de Datos en MongoDB

- Modelos
    - Embebidos
    - Refenciados


- Modelos Embebidos

**Uno a uno**
```json
db.departamentos.insertMany(
[{
    _id:1,
    nombre:"Tecnologias de informacion",
    responsable:{
        nombre:"Monico",
        apellidos:"Martinez Perez"
    },
    descripcion:"ejemplo de departamento"
    },
    {
    _id:2,
    nombre:"Contabilidad",
    responsable:{
        nombre:"Raul",
        apellidos:"Lopez Hernadez"
    },
    descripcion:"ejemplo de departamento"
    }
]
)
```

- Modelos Referenciados

**Uno a Uno**
```json
db.localidades.insertMany
(
[
    {
        _id:"BA",
        ciudad:"Buenos Aires",
        pais:"Argentina",
        poblacion:"16 millones",
        turismo:["edificios","tango","gastronomia","museo","perques"],
        direccion:"Avenida Tortolos",
        cod_departamento:1
    },
    {
        _id:"SA",
        ciudad:"Santiago",
        pais:"Chile",
        poblacion:"20 millones",
        turismo:["iglesias","vino","gastronomia","museos"],
        direccion:"Calle soy la vaca del corral",
        cod_departamento:2
    }
]
)
```
```json
db.departamentos.aggregate(
[
    {
        $lookup:
        {
            from:"localidades",
            localField:"_id",
            foreignField:"cod_departamento",
            as:"localidades"
        }
    }
])

```


```json
db.producto.insertMany(
[
    {
       _id:1,
    nombre:"Categoria1", 
    },
    {
        _id:2,
    nombre:"Categoria2",
    }
]
)
```



```json
db.producto.insertMany(
[
    {
       _id:1,
    nombre:"Arroz", 
    precio:200,
    existencia:200,
    categoria:1

    },
    {
        _id:2,
    nombre:"Maiz",
    precio:300,
    existencia:500,
    categoria:2
    }
]
)
```
- Proyeccion
```json
db.producto.insertMany(
[
    {
       _id:1,
    nombre:"Arroz", 
    precio:200,
    existencia:200,
    categoria:1

    },
    {
        _id:2,
    nombre:"Maiz",
    precio:300,
    existencia:500,
    categoria:2
    }
]
)
```
- Mongo Compas
[
  {
    $lookup:
      /**
       * from: The target collection.
       * localField: The local join field.
       * foreignField: The target join field.
       * as: The name for the results.
       * pipeline: Optional pipeline to run on the foreign collection.
       * let: Optional variables to use in the pipeline field stages.
       */
      {
        from: "localidades",
        localField: "_id",
        foreignField: "cod_departamento",
        as: "localidades"
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
        nombre: 1,
        "localidades.ciudad": 1
      }
  }
]