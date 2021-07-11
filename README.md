# Desafío 10

Item Collection

## Formato

Link al último commit de tu repositorio en Github.

## Pre-Requisitos

* Es preferible que se tenga acceso a una cuenta de google antes de la clase (creando una nueva o usando la suya personal) para optimizar el tiempo del módulo.

## Consigna

* Conecta tu nueva ItemCollection de google Firestore a tu ItemListContainer y ItemDetailContainer

## Aspectos a incluir en el entregable:

* Conecta tu colección de firestore con el listado de ítems y con el detalle de ítem.
* Elimina los async mocks (promises) y reemplazalos por los llamados de firestore.
* Si navegas a /item/:id debe ocurrir una consulta de (1) documento.
* Si navegas al catálogo debes consultar (N) documentos con un query filtrado, implementando la lógica de categorías y obteniendo el id de categoría del parámetro de react-router :categoryId