import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectivesDemoComponent} from './directives/directives-demo/directives-demo.component';
import {DependencyInjectionDemoComponent} from './dependency-injection/dependency-injection-demo/dependency-injection-demo.component';
import {ServicesDemoComponent} from './services/services-demo/services-demo.component';
import {RecipeAppComponent} from './recipe-app/recipe-app.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
