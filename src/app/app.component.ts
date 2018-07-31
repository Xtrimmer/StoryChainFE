import {Component} from '@angular/core';
import {routerTransition} from "./router.animations";

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html'
})
export class AppComponent {

  getPage(outlet) {
    return outlet.activatedRouteData['page']
  }
}
