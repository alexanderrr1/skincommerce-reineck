# Desafio 4

Contador con botón

## Formato

Link al ultimo commit de tu repositorio en Github.

## Consigna

* Crea un componente ItemCount.js que debe estar compuesto de un botón y controles para incrementar y decrementar la cantidad requerida de items.

## Aspectos a incluir en el entregable:

* Componente ItemCount.js con los respectivos controles de la consigna.

## A tener en cuenta:

* El número contador nunca puede superar el stock disponible.
* De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
* Si hay stock al clickear el boton se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.
* Detalle importante: Como sabes, todavia no tenemos nuestro detalle de item y este desarrollo es parte de el, asi que por el momento puedes probar e importar este componente dentro del ItemListContainer, solo a propositos de prueba. Despues lo sacaremos de aqui y lo incluiremos en el detalle del item.