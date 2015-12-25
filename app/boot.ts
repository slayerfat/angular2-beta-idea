// funcion primordial de angular
import {bootstrap} from "angular2/platform/browser";
// librerias necesarias para actividades con router
import {ROUTER_PROVIDERS} from "angular2/router";
// Componente principal
import {AppComponent} from "./components/app/app-component";

bootstrap(AppComponent, [
  ROUTER_PROVIDERS, // hacemos globales las librerias
]);
