import { TreeDto } from 'src/app/core/types/tree/treeDto';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {

  @Input() tree: TreeDto;
  treeToEdit: TreeDto;
  title: string;
  notesIsVisible: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'tree') {
        this.parseTree();
        this.addListeners();
        this.updateInitialState();
      }
    }
  }

  constructor() { }

  ngOnInit() {}

  parseTree() {
    if (this.tree) {
      console.log(this.tree);
      this.treeToEdit = {...this.tree};
      this.title = this.tree.movieTitle;
    }
  }

  onTitle(event: any) {
    const $movieTitle = $(event.target);
    if (this.onShiftEnter(event)) {
      const $subTitle = $($movieTitle.parents('.board-menu')[0]).find('.board-movie-subtitle');
      if (!$subTitle.is(':visible')) {
        $subTitle.show();
      }
      event.preventDefault();
      $subTitle.focus();
    }
    this.treeToEdit.movieTitle = event.target.value;
  }

  onMovieSubtitle(event: any) {
    const $movieSubtitle = $(event.target);
    let text = event.target.value;
    if (this.onShiftEnter(event)) {
      const $movieTitle = $($movieSubtitle.parents('.board-menu')[0]).find('.board-movie-title');
      event.preventDefault();
      if (!text) {
        $movieSubtitle.hide();
      } else {
        text = text.trim();
        $movieSubtitle.val(text);
      }
      $movieSubtitle.blur();
      $movieTitle.focus();
    }
    this.treeToEdit.subtitle = text;
  }

  onNotes(event: any) {
    const $notes = $(event.target);
    let text = event.target.value;
    if (this.onShiftEnter(event)) {
      event.preventDefault();
      this.treeToEdit.notes = text.trim();
    }
  }

  showNodes() {
    $('.notes-container').show();
    //this.treeToEdit.notes = " sasada";
  }

  logNode(){
    console.log(this.treeToEdit);
  }

  onShiftEnter(event: any) {
    return event.shiftKey && event.keyCode === 13 ? true : false;
  }

  // addListeners() {
  //   let $notes = $('.board-movie-notes');
  //   $notes.on('blur', () => {
  //     this.treeToEdit.notes = $notes.val().toString();
  //   });
  // }

  // updateInitialState() {
  //   this.notesIsVisible = this.treeToEdit.notes ? true : false;
  // }
}
