# Pre-Entrega 1

Primera entrega del proyecto final

## Formato

Link al último commit de tu repositorio en Github + Gif mostrando la navegabilidad por la app.

## Consigna

* Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom.

## Aspectos a incluir en el entregable:

* Rutas a configurar:
    * '/' navega a <ItemListContainer>
    * '/category/:id' navega a<ItemListContainer>
    * '/item/:id navega a <ItemDetailContainer>

* Links a configurar:
    * Clickear en el brand debe navergar a '/'
    * Clickear un Item.js debe bavegar a '/item/:id'
    * Clickear en una categoría del navbar debe navegar a '/category/:categoryId'

* Para finalizar integra los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡Utilizando efectos y los hooks de parámetros que vimos en clase!. Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.

## Además:

Deberas corroborar que tu proyecto cuente con:
    * Navbar con cart
    * Catálogo
    * Detalle de producto

## Incluir

* Archivo readme.md

## A tener en cuenta:

En la Rúbrica de Evaluación (ubicada en la carpeta de la camada) encontrar'as un mayor detalle respecto a qué se tendrá en cuenta para la corrección.

## Importante:

La entrega intermedia no supone la realización de un archivo aparte o extra; marca que en este momento se hará una revisión más integral.