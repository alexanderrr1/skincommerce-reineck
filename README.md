# Desafio 5

Catálogo con maps y promises.

## Formato

Link al ultimo commit de tu repositorio en Github.

## Consigna

* Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una Promise que los resuelva en tiempo diferido (setTimeout) de 2 segs para emular retrasos de red. 

## Aspectos a incluir en el entregable:

* Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (lo desarrollaremos más adelante).
* ItemList.js: Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContauner del desafío 3).
* Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock estático de datos que devuelva un conjunto de item { id, title, description, price, pictureURL} en dos segundos, para emular retrasos de red.