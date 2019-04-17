import { SceneDto } from './types/tree/sceneDto';
import { ActDto } from './types/tree/actDto';
import { Injectable } from '@angular/core';
import { TreeDto } from './types/tree/treeDto';
import { EpisodeDto } from './types/tree/episodeDto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeTreeService {

  scene1: SceneDto = {
    id: '442',
    info: 'scene lol',
    action: 'speaking',
    charge: true
  };
  scene2: SceneDto = {
    id: '2363',
    info: 'scene second',
    action: 'doing',
    charge: false
  };
  episode1: EpisodeDto = {
    id: '534',
    info: 'some info',
    action: 'he killed her',
    transition: 'changed everithing',
    timeSpot: { hours: 0, minutes: 12 },
    charge: true,
    plotId: '123',
    scenes: [this.scene1, this.scene2]
  };
  episode2: EpisodeDto = {
    id: '2344',
    info: 'some info d',
    action: 'he killed her d',
    transition: 'changed everithing again',
    timeSpot: { hours: 0, minutes: 15 },
    charge: false,
    plotId: '123',
    scenes: [this.scene1, this.scene2]
  };
  act1: ActDto = {
    id: '234',
    order: 1,
    name: 'Act 1',
    desc: 'description of first act',
    notes: 'my notes for the acts',
    episodes: [this.episode1, this.episode2]
  };
  act2: ActDto = {
    id: '432',
    order: 2,
    name: 'Act 2',
    desc: 'description of second act',
    notes: 'my notes for the acts',
    episodes: [this.episode1, this.episode2]
  };

  script1: TreeDto = {
    id: '123',
    movieTitle: 'Matrix',
    subTitle: 'amaixing ciberpunk!',
    notes: 'some shit which has to describe current movie',
    acts: [this.act1, this.act2]
  };
  emptyScript: TreeDto = {
    id: '124',
    movieTitle: 'Halk',
    subTitle: 'Marvel action movie!',
    notes: 'some shit which has to describe current movie',
    acts: [this.act2]
  };

  allScreepts: TreeDto[] = [
    this.script1, this.emptyScript
  ];

  constructor() { }

  getScripts(): Observable<any[]> {
    return of(
      [
        {
          id: this.script1.id, title: this.script1.movieTitle
        },
        {
          id: this.emptyScript.id, title: this.emptyScript.movieTitle
        }
      ]);
  }

  getScript(scriptId: string): Observable<TreeDto> {
    return of(this.allScreepts.find((s) => s.id === scriptId));
  }

  getfullScript(): Observable<TreeDto> {
    return of(this.script1);
  }

  getemptyScript(): Observable<TreeDto> {
    return of(this.emptyScript);
  }
}
