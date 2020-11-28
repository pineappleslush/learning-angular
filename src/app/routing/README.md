# Routing
Angular's `Router` allows you to handle navigation between views.


## Create an app with routing
```
ng new routing-app --routing
```

## Define your routes
Inside of [`app-routing.module.ts`](../app-routing.module.ts), define some paths and what component it should load:
```ts
import ...

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'directives', component: DirectivesDemoComponent},
  {path: 'dependency-injection', component: DependencyInjectionDemoComponent},
  {path: 'services', component: ServicesDemoComponent},
  {path: 'recipe-app', component: RecipeAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


## Display the component based on the current route path
In your template, add `<router-outlet></router-outlet>` to where you want the component to load on the page.

In [`app.component.html`](../app.component.html), we want the component to load in the sidenav content area:
```angular2html
<mat-sidenav-container>
  <mat-sidenav mode="side" opened>
    <app-navigation></app-navigation>
  </mat-sidenav>

  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```


## Programmatic routing
Aside from a link, you may want to incorporate a button that calls a method to handle something, then redirects that user to a different page.

Here's a simple scenario ([`routing-demo.component.ts`](routing-demo/routing-demo.component.ts)):

```ts
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  template: `
    <button mat-stroked-button color="primary" (click)="onGoToDirectives()">Learn About Directives</button>
  `,
  styleUrls: ['./routing-demo.component.scss']
})
export class RoutingDemoComponent {

  constructor(private router: Router) { }

  onGoToDirectives() {
    this.router.navigate(['/directives']);
  }
}
```


## Inside `router.navigate()`
The `navigate()` method accepts 2 params: commands (required), and extras (optional).
It then returns a Promise of `true` if the navigation was successful, or `false` if it failed or was rejected due to an error.

```ts
navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>;
```

### `commands` param
An array of URL fragments used to construct the destined URL.
The fragments are applied to the current URL unless a `relativeTo` property is passed into the extras options object.

### `extras` param
A NavigationExtras options object used to modify the `Router` navigation strategy.
All of these properties are optional to include in the options object.

| Property              | Type                            | Purpose |
| --------------------- | ------------------------------- | ------- |
| `relativeTo`          | `ActivatedRoute` or `null`      | Specify a root URI to use for relative navigation|
| `queryParams`         | `Params` or `null`              | Set query params to the URL |
| `fragmentParams`      | `string`                        | Sets a hash fragment to the URL |
| `queryParamsHandling` | `QueryParamsHandling` or `null` | How the query params in the router link are handled for the next navigation (preserve or merge) |
| `preserveFragment`    | `boolean`                       | Preserve the URL fragment for the next navigation |
| `skipLocationChange`  | `boolean`                       | Navigate without pushing a new state into history |
| `replaceUrl`          | `boolean`                       | Navigate and replace the current state in history |
| `state`               | `{[k: string]: any;}`           | Developer-defined state that can be passed to any navigation. Its values are accessible through `Navigation.extras` object returned from the [Router.getCurrentNavigation()method](api/router/Router#getcurrentnavigation) while a navigation is executing. |


## Accessing Parameters
[`routing-demo.component.html`](routing-demo/routing-demo.component.html) displays a list of Robot Detail buttons. 

Clicking a button will take you to [`route-parameters.component.ts`](route-parameters/route-parameters.component.ts), which displays the details of a robot based on the id defined as a variable in the route path.
```ts
import ...

@Component({
  selector: 'app-route-parameters',
  template: `
    <h2>{{robot.name}} Details</h2>
    
    <mat-list>
      <mat-list-item>Id: {{robot.id}}</mat-list-item>
      <mat-list-item>Power: {{robot.power}}</mat-list-item>
      <mat-list-item>Status: {{robot.status}}</mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./route-parameters.component.scss']
})
export class RouteParametersComponent implements OnInit {

  robot: Robot;

  constructor(
    private activatedRoute: ActivatedRoute,
    private robotService: RobotService
  ) { }

  ngOnInit(): void {
    // '+' is shorthand for converting string to int
    this.robot = this.robotService.find(+this.activatedRoute.snapshot.params['id']);
  }
}
```

### Subscribe to parameter changes
The example above has one small flaw. 
If the component is already loaded, but then the URL changes with a different parameter value, the component does not refresh with the latest value.
This behaviour is not actually considered a bug.

The data is initially retrieved from the activated route's snapshot object when the component first initializes.

When the URL updates, Angular sees that we are still on the same component and does not re-instantiate the component.

Technically, the expected data to load has changed, but Angular only sees that the component hasn't changed and decides not to destroy the current component, just to recreate a new one since we are already on that component.

In order to react to subsequent changes after the component has first initialized, we can **subscribe** to the activated route params, which is an **observable**.

Observables allow us to subscribe to an event that can be triggered in the future, allowing us to work with asynchronous tasks easily.

Here's an update to [`ngOnInit()`](route-parameters/route-parameters.component.ts), subscribing to param changes:
```ts
ngOnInit(): void {
  // '+' is shorthand for converting string to int
  this.robot = this.robotService.find(+this.activatedRoute.snapshot.params['id']);

  this.activatedRoute.params.subscribe((params: Params) => {
    this.robot = this.robotService.find(+params['id']);
  });
}
```

### Query params and fragments
You can also add query parameters and fragments to the URL like so:
```angular2html
<a
  [routerLink]="['/routing', 'parameters-demo', '1']"
  [queryParams]="{allowEdit: 1}"
  fragment="loading"
>
  Robot 1 with query params and fragment
</a>
```

You can access the queryParams and fragments and subscribe to their changes just as you would params.
```ts
console.log(this.activatedRoute.snapshot.queryParams);
console.log(this.activatedRoute.snapshot.fragment);
this.activatedRoute.queryParams.subscribe();
this.activatedRoute.fragment.subscribe();
```

