import { LeftSideBarModule } from './left-side-bar/left-side-bar.module';
import { BoardModule } from './board/board.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NodeComponent } from './board/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BoardModule,
    LeftSideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
