import { TreeDto } from './core/types/tree/treeDto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noNameAppUI';

  tree: TreeDto;

  onSelect(script: TreeDto) {
    this.tree = script;
  }
}
