---
title: Manipulación de Datos con Pandas y R 
date: "2020-06-24"
description: Manipulación Datos con Pandas python y R
---


### Leer un Csv - Pandas 
DF_COVID = pd.read_csv('./Casos_positivos_de_COVID-19_en_Colombia.csv',encoding='utf-8')
### Leer un Csv - R
COVID19<- read.csv("Casos_positivos_de_COVID-19_en_Colombia.csv")

### Tipo de dato - Pandas
type(DF_COVID)

### Cuantas lineas y columnas tiene nuestro dataframe - Pandas 
DF_COVID.shape

### Cuantas lineas y columnas tiene nuestro dataframe - R
dim(COVID19)

### Tipo de dato - Pandas
type(DF_COVID)
### Tipo de dato - R
class(COVID19)

### Visualizemos las columnas - Pandas
DF_COVID.columns

### Visualizemos las columnas - R
colnames(COVID19_)


### Convertir a Minúsculas - Pandas
df.column_name.str.lower()

df['column_name'].str.lower()
DF_COVID['Ciudad de ubicación'].str.lower()

### Convertir a Minúsculas - R
COVID19$Ciudad.de.ubicación <- tolower(COVID19$Ciudad.de.ubicación)

### Reemplazar un cadena por otra - Pandas
DF_COVID['fecha reporte web'].replace("T00:00:00.000", "", regex=True)   

### Reemplazar un cadena por otra - R
COVID19$Fecha.diagnostico  <-gsub("T00:00:00.000", "",  COVID19$Fecha.diagnostico)

### Convertir Date - Pandas
DF_COVID['fecha reporte web'] = pd.to_datetime(DF_COVID['fecha reporte web'])

### Convertir Date - R
 COVID19_Colombia$fecha.reporte.web <- as.Date(COVID19_Colombia$fecha.reporte.web)

### Colocar nombre a las columnas - Pandas
municipioscolombia.columns = ['Codigo', 'Nombre', 'Codigo_departamento', 'Nombre_departamento', 'Latitud', 'Longitud']

### Colocar nombre a las columnas - R
municipioscolombia = read.table("municipioscolombia.csv", header=T, sep="," , dec=".")
names (municipioscolombia)

names (municipioscolombia) = c("Codigo", "Nombre", "Codigo_departamento", "Nombre_departamento", "Latitud", "Longitud" )
names (municipioscolombia)

### Creando una nueva  fila en DF - Pandas
municipioscolombia.loc["1102"] = [47980,"Zona Bananera",47,"Magdalena","10.849993",-74.060849 ]

### Creando una nueva  fila en DF - R
zb<-data.frame(Codigo=c(47980),
              Nombre=c("Zona Bananera"),
              Codigo_departamento=c(47),
              Nombre_departamento=c("Magdalena"),
              Latitud=c("10.849993"),
              Longitud=c(-74.060849)) # Creando un DF con las nuevas oservaciones de Zona Bananera

municipioscolombia<-rbind(municipioscolombia,zb)   # Uniendo los nuevos dataframe.

### Unir dos DdataFrames - Pandas
pd.concat([DF_COVID,municipioscolombia], axis=1)

Ó

COVID19 = pd.merge(DF_COVID,municipioscolombia, left_on="Código DIVIPOLA", right_on="Codigo")
### Unir dos DdataFrames - R
COVID19_Colombia <-  merge(COVID19_Colombia, municipioscolombia, by.x="Codigo", by.y="Codigo", all.x=TRUE)


### Eliminar columnas - Pandas
COVID19 = COVID19.drop(['Codigo', 'Nombre','Codigo_departamento','Nombre_departamento'], axis=1)


### Eliminar columnas - R
COVID19_Colombia <- select(COVID19_Colombia, -c(Nombre,Codigo_departamento, Nombre_departamento ))


### Agrupar y summarise - Pandas
COVID19['COUNTER'] =1       #initially, set that counter to 1.
by_ubic_aten = COVID19.groupby(['Ciudad de ubicación','atención'])['COUNTER'].sum() #sum function
print(by_ubic_aten)

Ó

(COVID19.groupby(['Ciudad de ubicación', 'atención']).size() 
   .sort_values(ascending=False) 
   .reset_index(name='count') 
   .drop_duplicates(subset='atención'))

### Agrupar y summarise - R
by_ubic_aten <- COVID19_Colombia %>% group_by(COVID19_Colombia$Ciudad.de.ubicación, COVID19_Colombia$atención )
by_atencion <- by_ubic_aten  %>% summarise(n = n())
by_atencion

### filter - Pandas
COVID19.query('COUNTER == 1 & atención =="Casa"')

### filter - R
by_quindio <- filter(COVID19_Colombia, COVID19_Colombia$Departamento.o.Distrito == "Quindío" )


###  Pivot - Pandas
Aten.pivot_table(index='Ciudad de ubicación', columns='atención', values='count', fill_value=0)

###  Pivot - R
pivot_wider(names_from = "COVID19_Colombia$atención", values_from = "n", values_fill = list(n = 0)) 

