---
title: Como construir una Shiny App!
date: "2020-07-24"
description: "Shiny App tiene tres componentes"
---

Genial!💻
**Construir una Shiny App** 😃

Un link que ayuda a ententer como construir una Shiny App!!!
https://shiny.rstudio.com/tutorial/written-tutorial/lesson1/

➜ app.R tiene tres componentes:

1. Un objeto de interfaz de usuario

2. Una función de servidor

3. Una llamada a la shinyAppfunción

```R
library(shiny)

ui <- ...

server <- ...

shinyApp(ui = ui, server = server)
```
➜ Para ejecutar la app en rstudio click en el botón Run App

➜ Para realizar deploy en Shinyapps.io este link ayuda a entender como arealizar el deploy gratuito:

https://docs.rstudio.com/shinyapps.io/getting-started.html#installation

Los pasos son:

1. instalar install.packages('rsconnect') en rstudio.
2. Cargar la library(rsconnect)
3. Crear una cuenta gratuita en Shinyapps.io para adquirir el token para la aplicación.
4. Ejecutar este comando en rstudio para realizar el deploy:
```R
rsconnect::setAccountInfo(name="<ACCOUNT>", token="<TOKEN>", secret="<SECRET>")
```
5. Luego ejecutar en rstudio:
```R
library(rsconnect)
deployApp()
````

**Es posible correr la aplicación en Github**
En este link se explica como correr la palicacion con github.

https://shiny.rstudio.com/reference/shiny/0.12.0/runUrl.html
