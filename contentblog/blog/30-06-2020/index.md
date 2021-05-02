---
title: Configuración PostgresSQL en Pandas
date: "2020-06-30"
description: Conexión PostgresSQL en Pandas
---

### Instalación de psycopg2 en Pandas
**Link sobre conexiones a la mayoría de las bases de datos SQL**
([Engine Configuration](https://docs.sqlalchemy.org/en/13/core/engines.html))

#### Instalar psycopg2 en Conda
Al instalar **conda install psycopg2** se genera en esta insconsistencia en MAC:
**(Sale es error: Solving environment: failed with initial frozen solve. Retrying with flexible solve)**

Para resolverla se debe ejecutar:

➜ conda create -c conda-forge --name psycopg2  root psycopg2

Se activa el ambiente:
**To activate this environment, use** 

$ conda activate psycopg2

**To deactivate an active environment, use**

$ conda deactivate

**Sale este error:**
ModuleNotFoundError: No module named 'sqlalchemy'

(psycopg2) ➜  ~ pip3.8 install --upgrade sqlalchemy

**Al run en Jupiter sale esto:**

➜ ImportError: dlopen(/Library/Frameworks/Python.framework/Versions/3.8/lib/python3.8/site-packages/psycopg2/_psycopg.cpython-38-darwin.so, 2): Library not loaded: @rpath/libssl.1.1.dylib
  Referenced from: /Library/Frameworks/Python.framework/Versions/3.8/lib/python3.8/site-packages/psycopg2/_psycopg.cpython-38-darwin.so
  Reason: image not found

**Se resuelve así:**
* brew reinstall openssl@1.1
* cd /usr/local/Cellar
* mv openssl openssl@1.0
* mv openssl@1.1 openssl

**luego:**
* cd /usr/local/Cellar/openssl@1.1/1.1.1g/lib

* sudo cp libssl.1.1.dylib libcrypto.1.1.dylib /usr/local/lib/

* sudo rm libssl.dylib libcrypto.dylib/lib

➜   sudo ln -s libssl.1.1.dylib libssl.dylib

➜   sudo ln -s libcrypto.1.1.dylib libcrypto.dylib


#### Jupiter Netbook se ejecuta el siguiente código:
 **#dialect+driver://username:password@host:port/database**

➜ from sqlalchemy import create_engine
import pandas as pd

➜ engine = create_engine('postgresql+psycopg2://username:password@localhost:5432/database')

➜ connection = engine.connect()

➜ pd.read_sql(''' SELECT * FROM tabla ''', connection    )

Los pasos anteriores fueron los que ejecute para  utilizar **pd.read_sql** en Jupiter.
