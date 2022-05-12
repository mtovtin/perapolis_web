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
        stateChangeExpr: '* => *', 

        enter: animations.zoomInRight(800),
        leave: animations.zoomInRight(800),
      }),
    ]),
  ],
})
export class AppComponent {}