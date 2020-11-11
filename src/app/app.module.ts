import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDirective } from './directives/attribute-directives/simple.directive';
import { DemoComponent } from './directives/demo/demo.component';
import { CustomizableDirective } from './directives/attribute-directives/customizable.directive';
import { CustomizableShorthandDirective } from './directives/attribute-directives/customizable-shorthand.directive';
import { CustomizableShorthandReadableDirective } from './directives/attribute-directives/customizable-shorthand-readable.directive';
import { WhatsWithTheAsteriskComponent } from './directives/structural-directives/whats-with-the-asterisk/whats-with-the-asterisk.component';
import { NgSwitchComponent } from './directives/structural-directives/ng-switch/ng-switch.component';
import { HappyRobotComponent } from './directives/structural-directives/whats-with-the-asterisk/happy-robot/happy-robot.component';
import { HungryRobotComponent } from './directives/structural-directives/whats-with-the-asterisk/hungry-robot/hungry-robot.component';
import { TiredRobotComponent } from './directives/structural-directives/whats-with-the-asterisk/tired-robot/tired-robot.component';
import { LostRobotComponent } from './directives/structural-directives/whats-with-the-asterisk/lost-robot/lost-robot.component';
import { NgTemplateComponent } from './directives/structural-directives/ng-template/ng-template.component';
import {FormsModule} from '@angular/forms';
import { NgContainerComponent } from './directives/structural-directives/ng-container/ng-container.component';
import { UnlessDirective } from './directives/structural-directives/unless.directive';
import { NoDependenciesUsedComponent } from './dependency-injection/no-dependencies-used/no-dependencies-used.component';
import { WithoutDependencyInjectionComponent } from './dependency-injection/without-dependency-injection/without-dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    DemoComponent,
    CustomizableDirective,
    CustomizableShorthandDirective,
    CustomizableShorthandReadableDirective,
    WhatsWithTheAsteriskComponent,
    NgSwitchComponent,
    HappyRobotComponent,
    HungryRobotComponent,
    TiredRobotComponent,
    LostRobotComponent,
    NgTemplateComponent,
    NgContainerComponent,
    UnlessDirective,
    NoDependenciesUsedComponent,
    WithoutDependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
