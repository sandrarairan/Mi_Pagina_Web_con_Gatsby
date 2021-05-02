---
title: GridSearchCV es una clase en scikit-learn!
date: "2021-05-02"
description: "GridSearchCV permite evaluar y seleccionar de forma sistemática los parámetros de un modelo"
---

Genial!💻
**Construir una Shiny App** 😃

GridSearchCV es una clase en scikit-learn que permite evaluar y seleccionar de forma sistemática los parámetros de un modelo. Indicándole un modelo y los parámetros a probar, puede evaluar el rendimiento del primero en función de los segundos mediante validación cruzada

**Como se utiliza GridSearchCV con la regresión LASSO**

```Python
import numpy as np
from sklearn.linear_model import Lasso
from sklearn.model_selection import GridSearchCV
alphas = np.array([1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01])
model = Lasso()
grid = GridSearchCV(estimator = model,
                    param_grid = dict(alpha = alphas),
                    cv = 3)
grid.fit(X, y)
```

**Ejemplo de GridSearchCV con la Classificación de Penguinos**

https://sandrarairan.github.io/ML_Classification_Penguins/


