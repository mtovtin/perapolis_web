import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { animations, buildRouteTransition } from 'ngx-animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      buildRouteTransition({
        stateChangeExpr: "FruitsPage => AnimalsPage",

        enter: animations.fadeIn(500)
      }),
      buildRouteTransition({
        stateChangeExpr: '* => *', 
        enter: animations.fadeIn(800),
        leave: animations.fadeOut(800),
      }),
    ]),
  ],
})
export class AppComponent {}