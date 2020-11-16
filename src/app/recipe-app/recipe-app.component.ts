import {Component} from '@angular/core';

@Component({
  selector: 'app-recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrls: ['./recipe-app.component.scss']
})
export class RecipeAppComponent {

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
