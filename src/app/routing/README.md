# Routing
Angular's `Router` allows you to handle navigation between views.


## Create an app with routing
```
ng new routing-app --routing
```

## Define your routes
Inside of [`app-routing.module.ts`](../app-routing.module.ts), define some paths and what component it should load:
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DirectivesDemoComponent} from './directives/directives-demo/directives-demo.component';
import {DependencyInjectionDemoComponent} from './dependency-injection/dependency-injection-demo/dependency-injection-demo.component';
import {ServicesDemoComponent} from './services/services-demo/services-demo.component';
import {RecipeAppComponent} from './recipe-app/recipe-app.component';

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

