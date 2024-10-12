# GestureFit

GestureFit es una aplicación móvil innovadora que utiliza el acelerómetro del dispositivo para guiar y monitorear ejercicios físicos.

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [NativeScript CLI](https://docs.nativescript.org/setup/): `npm install -g nativescript`
- Para desarrollo en Android: [Android Studio](https://developer.android.com/studio) y Android SDK
- Para desarrollo en iOS (solo macOS): Xcode

## Instalación

1. Clona este repositorio:
   ```
   git clone [URL_DEL_REPOSITORIO]
   ```

2. Navega al directorio del proyecto:
   ```
   cd GestureFit
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

- Para ejecutar en Android:
  ```
  ns run android
  ```

- Para ejecutar en iOS (solo macOS):
  ```
  ns run ios
  ```

## Estructura del proyecto

- `src/app/home`: Componente de la página de inicio
- `src/app/exercise`: Componente para la detección de ejercicios
- `src/app/progress`: Componente para mostrar el progreso del usuario

## Características principales

- Detección de movimientos utilizando el acelerómetro del dispositivo
- Feedback en tiempo real durante los ejercicios
- Seguimiento del progreso del usuario