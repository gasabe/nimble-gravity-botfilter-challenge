# Nimble Gravity – BotFilter Challenge

Aplicación desarrollada en React como parte del challenge tecnico para la posición de Junior Fullstack Developer en Nimble Gravity.

## Cómo correr el proyecto

1. Clonar el repositorio:

git clone https://github.com/gasabe/nimble-gravity-botfilter-challenge.git
cd nimble-gravity-botfilter-challenge

2. Instalar dependencias:

npm install

3. Ejecutar en modo desarrollo:

npm run dev

El proyecto se ejecuta en:
http://localhost:5173

---

## Decisiones de arquitectura
Separación en api/, hooks/ y components/

Dividí el proyecto en estas tres carpetas para mantener responsabilidades claras:

- api/ → se encarga únicamente de comunicarse con el servidor.

- hooks/ → manejan el estado y la lógica (loading, error, data).

- components/ → se enfocan solamente en la interfaz.

## ¿Por qué existe client.js?

En lugar de repetir fetch, el manejo de errores y el parseo de JSON en cada endpoint, creé un archivo central que se encarga de eso.

Esto permite:

- Evitar código repetido en el manejo de errores.

- Mantener las funciones de nimbleApi.js más simples y claras.

- Facilitar futuros cambios 

## Hook por funcionalidad

Cada flujo principal tiene su propio hook:

- Buscar candidato

- Cargar trabajo

- Postularse (submit)

Cada uno maneja su loading, error y data, manteniendo App.jsx más limpio y fácil de leer.