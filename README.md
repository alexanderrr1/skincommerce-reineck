# Desafío 7

Sincronizar Counter

## Formato

Link al último commit de tu repositorio en Github.

## Consigna

* Importa el ItemCount.js del desafío Nº 4 en el counter ItemDetail.js y configura el evento de compra, siguiendo los detalles de manual.

## Aspectos a incluir en el entregable:

* Debes lograr separar la responsabilidad del count, del detalle del ìtem, y esperar los eventos de agregado emitidos por el ItemCount.
    * Cuando ItemCount emita un evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount.
    * Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados mostrar en su lugar un botón  que diga "Terminar mi compra".
    * El botón de terminar mi cimpra debe poder navegar a un componente vacío por el momento en la ruta '/cart'.