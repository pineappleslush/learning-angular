import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDirective } from './learning-about-directives/attribute-directives/simple.directive';
import { DirectivesComponent } from './learning-about-directives/directives/directives.component';
import { CustomizableDirective } from './learning-about-directives/attribute-directives/customizable.directive';
import { CustomizableShorthandDirective } from './learning-about-directives/attribute-directives/customizable-shorthand.directive';
import { CustomizableShorthandReadableDirective } from './learning-about-directives/attribute-directives/customizable-shorthand-readable.directive';
import { WhatsWithTheAsteriskComponent } from './learning-about-directives/structural-directives/whats-with-the-asterisk/whats-with-the-asterisk.component';
import { NgSwitchComponent } from './learning-about-directives/structural-directives/ng-switch/ng-switch.component';
import { HappyRobotComponent } from './learning-about-directives/structural-directives/whats-with-the-asterisk/happy-robot/happy-robot.component';
import { HungryRobotComponent } from './learning-about-directives/structural-directives/whats-with-the-asterisk/hungry-robot/hungry-robot.component';
import { TiredRobotComponent } from './learning-about-directives/structural-directives/whats-with-the-asterisk/tired-robot/tired-robot.component';
import { LostRobotComponent } from './learning-about-directives/structural-directives/whats-with-the-asterisk/lost-robot/lost-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    DirectivesComponent,
    CustomizableDirective,
    CustomizableShorthandDirective,
    CustomizableShorthandReadableDirective,
    WhatsWithTheAsteriskComponent,
    NgSwitchComponent,
    HappyRobotComponent,
    HungryRobotComponent,
    TiredRobotComponent,
    LostRobotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
