import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IndexComponent} from "../index/index-component"

@Component({
  selector: 'app',
  templateUrl: 'app/components/app/app-component.html',
  directives: [ROUTER_DIRECTIVES, IndexComponent]
})
@RouteConfig([
  {path:'/', name: 'Index', component: IndexComponent},
])
export class AppComponent {
  //
}
