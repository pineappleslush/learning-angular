import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InteractiveAttributeDirective} from './directives/attribute-directives/interactive-attribute.directive';
import {DirectivesDemoComponent} from './directives/directives-demo/directives-demo.component';
import {CustomizableHighlightDirective} from './directives/attribute-directives/customizable-highlight.directive';
import {CustomizableShorthandHighlightDirective} from './directives/attribute-directives/customizable-shorthand-highlight.directive';
import {CustomizableShorthandReadableHighlightDirective} from './directives/attribute-directives/customizable-shorthand-readable-highlight.directive';
import {WhatsWithTheAsteriskComponent} from './directives/structural-directives/whats-with-the-asterisk/whats-with-the-asterisk.component';
import {NgSwitchComponent} from './directives/structural-directives/ng-switch/ng-switch.component';
import {HappyRobotComponent} from './directives/structural-directives/whats-with-the-asterisk/happy-robot/happy-robot.component';
import {HungryRobotComponent} from './directives/structural-directives/whats-with-the-asterisk/hungry-robot/hungry-robot.component';
import {TiredRobotComponent} from './directives/structural-directives/whats-with-the-asterisk/tired-robot/tired-robot.component';
import {LostRobotComponent} from './directives/structural-directives/whats-with-the-asterisk/lost-robot/lost-robot.component';
import {NgTemplateComponent} from './directives/structural-directives/ng-template/ng-template.component';
import {FormsModule} from '@angular/forms';
import {NgContainerComponent} from './directives/structural-directives/ng-container/ng-container.component';
import {UnlessDirective} from './directives/structural-directives/unless.directive';
import {WithoutDependencyInjectionComponent} from './dependency-injection/without-dependency-injection/without-dependency-injection.component';
import {DependencyInjectionDemoComponent} from './dependency-injection/dependency-injection-demo/dependency-injection-demo.component';
import {BasicHighlightDirective} from './directives/attribute-directives/basic-highlight.directive';
import {RendererHighlightDirective} from './directives/attribute-directives/renderer-highlight.directive';
import {HostBindingHighlightDirective} from './directives/attribute-directives/host-binding-highlight.directive';
import {DropdownDirective} from './directives/dropdown-directive/dropdown.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {ServicesDemoComponent} from './services/services-demo/services-demo.component';
import {ManageAccountsDemoComponent} from './services/manage-accounts-demo/manage-accounts-demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NewAccountComponent} from './services/manage-accounts-demo/new-account/new-account.component';
import {AccountComponent} from './services/manage-accounts-demo/account/account.component';
import {MatCardModule} from '@angular/material/card';
import {ManageUsersDemoComponent} from './services/manage-users-demo/manage-users-demo.component';
import {InactiveUsersComponent} from './services/manage-users-demo/inactive-users/inactive-users.component';
import {ActiveUsersComponent} from './services/manage-users-demo/active-users/active-users.component';
import {RecipeAppModule} from './recipe-app/recipe-app.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {RoutingDemoComponent} from './routing/routing-demo/routing-demo.component';
import {RouteParametersComponent} from './routing/route-parameters/route-parameters.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveAttributeDirective,
    DependencyInjectionDemoComponent,
    CustomizableHighlightDirective,
    CustomizableShorthandHighlightDirective,
    CustomizableShorthandReadableHighlightDirective,
    WhatsWithTheAsteriskComponent,
    NgSwitchComponent,
    HappyRobotComponent,
    HungryRobotComponent,
    TiredRobotComponent,
    LostRobotComponent,
    NgTemplateComponent,
    NgContainerComponent,
    UnlessDirective,
    WithoutDependencyInjectionComponent,
    DirectivesDemoComponent,
    DependencyInjectionDemoComponent,
    BasicHighlightDirective,
    RendererHighlightDirective,
    HostBindingHighlightDirective,
    DropdownDirective,
    ServicesDemoComponent,
    ManageAccountsDemoComponent,
    NewAccountComponent,
    AccountComponent,
    ManageUsersDemoComponent,
    InactiveUsersComponent,
    ActiveUsersComponent,
    HomeComponent,
    NavigationComponent,
    RoutingDemoComponent,
    RouteParametersComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    RecipeAppModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
