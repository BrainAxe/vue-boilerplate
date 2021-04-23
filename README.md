# my-awesome-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# src folder structure

```
src
--assets
--common
--layouts
--middlewares
--modules
--plugins
--router
--services
--static
--store
--views
```
## Assets

This directory stores all assets files. Like fonts, icons, images, styles etc.

## Common

This folder is using to save common files. Usually, it could be separated into multiple inner folders: components mixins directives etc.

## Layouts

App layouts in this directory. For example: ` AppLayout.vue `.

## Middlewares

This directory closely works with vue router. Navigation guards can be stored inside this folder.

## Modules

This is the core of the application. Here we store all of modules — logically separated parts of the application. Inside each module:

 - An inner components folder where vue components can be saved.
 - tests folder
 - store directory

## Plugins

In this folder create and connect all plugins

## Services

This folder is needed to store services. For example, to create and save an API connections service, localStorage manager service, etc.

## Router

Inside this directory, all files related to vue-router can stored.

## Store

This is vuex store directory where to store root state, actions, mutations and getters.

## Views

Store all entry points for application's routes. For example, in the application there can be `/home/about/orders` routes. Respectively, in the views folder should have `Home.vue About.vue Orders.vue`.
