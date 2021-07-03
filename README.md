# Desafío 8

CartContext

## Formato

Link al último commit de tu repositorio en Github.

## Consigna

* Implementa React Context para mantener el estado de compra del user siguiendo los detalles del manual.}

## Aspectos a incluir en el entregable:

* CartContext.js con el contect y su custom provider (Impórtalo en App.js)
* Al clickear comprar en ItemDetail se debe guardar en el CartContext.js el producto y su cantidad en forma de objeto { item: {}, quantity }
* Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
* Métodos recomendados:
    *addItem(item, quantity) // Agregar cierta cantidad de un ítem al carrito.
    *removeItem(itemId) // Remover un item del cart por usando su id
    *clear() // Remover todos los items
    *isInCart: (id)=>true|false