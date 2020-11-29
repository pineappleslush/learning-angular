import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectivesDemoComponent} from './directives/directives-demo/directives-demo.component';
import {DependencyInjectionDemoComponent} from './dependency-injection/dependency-injection-demo/dependency-injection-demo.component';
import {ServicesDemoComponent} from './services/services-demo/services-demo.component';
import {RecipeAppComponent} from './recipe-app/recipe-app.component';
import {HomeComponent} from './home/home.component';
import {RoutingDemoComponent} from './routing/routing-demo/routing-demo.component';
import {RouteParametersComponent} from './routing/route-parameters/route-parameters.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'directives', component: DirectivesDemoComponent},
  {path: 'dependency-injection', component: DependencyInjectionDemoComponent},
  {path: 'services', component: ServicesDemoComponent},
  {
    path: 'routing', component: RoutingDemoComponent, children: ([
      {path: 'parameters-demo/:id', component: RouteParametersComponent},
    ])
  },
  {path: 'recipe-app', component: RecipeAppComponent},
  {path: 'error', component: PageNotFoundComponent},
  {path: 'login', component: LoginComponent}
  // {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
