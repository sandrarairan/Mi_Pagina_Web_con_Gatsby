---
title: Fexdashboard-example
date: "2020-05-01"
description: "flexdashboard-example"
---

## flexdashboard-example
Flexdashboard usa R Markdown 

Flexdashboard se muestra usando Github Pages.

**Iniciar**
Install Homebrew

* ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

**Install R and Pandoc**

* brew tap brewsci/science
* brew install r
* brew install pandoc


 **instalar the flexdashboard package**

**r stdio:**
* install.packages("flexdashboard")
* Create a new flexcashboard R Markdown file from the R console

* rmarkdown::draft("index.Rmd", template = "flex_dashboard", package = "flexdashboard")

* Crear un archivo  _site.yml

* name: "my-website"
* output_dir: docs


**Renderizar el sitio**

* rmarkdown::render_site()



**agréguelo a.gitignore**

echo docs/README.html >> .gitignore


* Después de crear un nuevo repositorio de github (use https://github.com/new ), confirme y envíe el sitio.

* git add -A
* git commit -m "create flexdashboard site"
* git remote add origin https://github.com/nombre_git_hub_page.git
* git push -u origin master


**Luego habilite las páginas de GitHub en:**
Source to master branch /docs folder in the GitHub Pages section of the repository settings.



