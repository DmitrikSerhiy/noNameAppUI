
import { FakeTreeService } from './../../core/fake-tree.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeDto } from 'src/app/core/types/tree/treeDto';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss']
})
export class ScriptsComponent implements OnInit {

  scripts: any[];
  @Output() selectedScript = new EventEmitter<TreeDto>();

  constructor(private fakeTreeService: FakeTreeService) { }

  ngOnInit() {
    this.fakeTreeService.getScripts().subscribe((data) => {
      this.scripts = data;
    });
  }

  getTree(id: string) {
    this.fakeTreeService.getScript(id).subscribe((data) => {
      this.selectedScript.emit(data);
    });
  }

}
