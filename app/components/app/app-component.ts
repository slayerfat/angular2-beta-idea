import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {IndexComponent} from "../index/index-component";

@Component({
  directives: [ROUTER_DIRECTIVES, IndexComponent],
  selector: "app",
  templateUrl: "app/components/app/app-component.html"
})
@RouteConfig([
  {component: IndexComponent, name: "Index", path: "/"},
])
export class AppComponent {
  //
}
