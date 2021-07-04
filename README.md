# Desafío 9

CartView

## Formato

Link al último commit de tu repositorio en Github.

## Consigna

* Expande tu componente Cart.js con el desglose de la compra y actualiza tu CartWidget.js para hacerlo reactivo al contexto.

## Aspectos a incluir en el entregable:

* Cart.js
    + Debe mostrar el desglose de tu carrito y el precio total.
    + Debe estar agregada la ruta 'cart' al BrowserRouter.
    + Debe mostrar todos los ítems agregados agrupados.
    + Por cada tipo de ítem incluye un control para eliminar ítems.
    + De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.
* CartWidget.js
    + Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
    + El cart widget no se debe mostrar más si no hay ítems en el carrito, aplicando la técnica que elijas (dismount, style, etc).