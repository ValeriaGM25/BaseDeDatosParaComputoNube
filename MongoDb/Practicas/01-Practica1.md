# Practica 1 BASE DE DATOS COLECCIONES E INSERTS

1.Conectarnos con mongosh a mongodh
2.Crear una base de datos llamada Curso
3.Comprobar que la base de datos no exista
4.Crear una coleccion que se llame factura y mostrarla

```json


```


1.Crear un documento con los siguientes datos

| Codigo   | Valor   |
|-------------|-------------|
| Cod_Factura | 10 |
| Ciente | Frutas Ramirez |
| Total | 223 |

| Codigo   | Valor   |
|-------------|-------------|
| Cod_Factura | 20 |
| Ciente | Ferreteria Juan|
| Total | 140 |


```json
db.Facturas.insertOne( {
... cod_factura: 10,
... Cliente: 'Frutas Ramirez',
... total:223}
... )

db.Facturas.insertOne({ cod_factura: 20, Cliente: 'Ferreteria Juan', total: 140 } )
```
6.Crear una nueva collección pero usando directamente el insertOne. Insertar un doc en la colleccion Productos con los siguientes deatos: 

| Codigo   | Valor   |
|-------------|-------------|
| Cod_Producto | 1 |
| Nombre | Tornillo x 1''|
| Precio | 2 |
| unidades | 1500 |

```json
db.productos.insertOne({ cod_producto: 1, nombre: 'Tornillo x 1"', precio:2, unidades:1500 })
```

7.Crear un nuevo doc de producto que contenga un array que contenga los sieguientes datos: 

| Codigo   | Valor   |
|-------------|-------------|
| Cod_Producto | 2 |
| Nombre | Martillo|
| Precio | 20 |
| unidades | 50 |
|Fabricantes | fab1, fab2, fab3, fab4 |

```json
 db.productos.insertOne({ cod_producto: 2, nombre: 'Martillo', precio:20, unidades:50, Fabricantes: ['fab1', 'fab2', 'fab3', 'fab4']})
 ```

 8.Borrar la colleccion faturas y comprobar que borro
```json
 db.Facturas.drop()
show collections
 ```

9.Insertar un doc en una coleccion denominada **Fabricantes**
para probr los sub doc y la clave _id personalizada

| Codigo   | Valor   |
|-------------|-------------|
| id | 1 |
| Nombre | fab1 |
|Localidad | ciudad: Buenos Aires,  pais: argentina, calle: calle pez 27, cod_postal: 2900 |

```json
db.fabricantes.insertOne({ _id: 1, Nombre: 'fab1', Localidad:{ ciudad: 'Buenos Aires', pais: 'Argentina', Calle: 'Calle Pez 27', cod:29000 } })
 ```

 10.Realizar una inserción de varios docs en la colección productosinsertMany.([])

| Codigo   | Valor   |
|-------------|-------------|
| Cod_Producto | 3 |
| Nombre | Alicates |
| Precio | 10 |
| unidades | 25 |
|Fabricantes | fab1, fab2, fab5 |

| Codigo   | Valor   |
|-------------|-------------|
| Cod_Producto | 4 |
| Nombre | Arandelas |
| Precio | 1 |
| unidades | 500 |
|Fabricantes | fab2, fab3, fab4 |




