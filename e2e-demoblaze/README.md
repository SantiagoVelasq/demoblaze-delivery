# E2E Demoblaze

Proyecto de pruebas end-to-end con WebdriverIO y Cucumber para el sitio [Demoblaze](https://www.demoblaze.com/).

https://github.com/SantiagoVelasq/demoblaze-delivery

## Requisitos previos

- **Node.js** 18 o superior
- **npm** 9 o superior
- **Chrome** (para ejecución local)

## Instalación

1. Clonar el repositorio (si aplica)
2. Instalar dependencias:

```bash
cd e2e
npm install
```

## Ejecución de los tests

### Desde la raíz del proyecto

```bash
# Ejecutar tests con tag @smoke (por defecto)
npm run wdio

# Ejecutar tests smoke (explícito)
npm run test:smoke
```

### Desde la carpeta e2e

```bash
cd e2e

# Ejecutar tests (por defecto @smoke)
npm run wdio

# Ejecutar tests smoke
npm run test:smoke

# Ejecutar un feature específico
npx wdio run wdio.conf.ts --spec ./test/features/agencies/successfulPurchase.feature
```

### Comando directo con WebdriverIO

```bash
cd e2e

# Ejecutar con tag específico
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@smoke"

# Ejecutar otro tag (ej: @purchase)
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@purchase"
```

## Tags de Cucumber

Los escenarios usan tags para filtrar la ejecución:

| Tag | Descripción |
|-----|-------------|
| `@smoke` | Tests críticos (ejecutados por defecto) |
| `@purchase` | Tests del flujo de compra |
| `@e2e` | Tests end-to-end |

Para ejecutar múltiples tags:
```bash
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@smoke or @purchase"
```

## Reportes

Los resultados se generan con **Allure**. Para visualizar el reporte:

```bash
cd e2e
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Estructura del proyecto

```
e2e-demoblaze/
├── e2e/
│   ├── test/
│   │   └── features/          # Archivos .feature y step definitions
│   │       └── agencies/
│   ├── data/                  # Datos de prueba (ej. credentials.json)
│   ├── wdio.conf.ts           # Configuración principal
│   ├── tsconfig.json
│   └── package.json
├── package.json
├── .gitignore
└── README.md
```
