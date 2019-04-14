import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserRepositoryService } from './user/user-repository.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
    ],
    providers: [
      UserRepositoryService
    ]
})
export class CoreModule { }
