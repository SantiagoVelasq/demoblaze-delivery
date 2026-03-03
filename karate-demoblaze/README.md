# Proyecto Karate Demoblaze

Este repositorio contiene pruebas automatizadas usando Karate para el proyecto Demoblaze.

## Requisitos previos

- Java JDK instalado (versión 8 o superior)
- Maven instalado y disponible en el PATH

## Estructura del proyecto

- `src/test/java` - archivos de prueba Karate (`.feature`) y el `TestRunner` de JUnit
- `pom.xml` - configuración Maven que incluye dependencias de Karate
- `karate-reports/` - reporte generado después de ejecutar los tests

## Ejecutar las pruebas

1. Abrir una terminal en la raíz del proyecto (`C:\Automatizacion\Karate\karate-demoblaze`).
2. Ejecutar el comando de Maven para correr los tests:
   ```powershell
   mvn test
   ```
3. Maven descargará dependencias y correrá los escenarios de Karate.

## Ver resultados

- Una vez completada la ejecución, los reportes se generan en la carpeta `karate-reports/`.
- Abra `karate-summary.html` en un navegador para ver un resumen interactivo.
- Puede revisar archivos HTML individuales para cada feature.

## Personalización

- Agregue o edite archivos `.feature` dentro de `src/test/java/com/demoblaze`.
- Ajuste el `TestRunner.java` si necesita especificar opciones o tags.

## Observaciones

- Este proyecto utiliza Karate con JUnit 5 integrado en Maven.
- Asegúrese de tener acceso a Internet si las pruebas interactúan con servicios en línea.

---

