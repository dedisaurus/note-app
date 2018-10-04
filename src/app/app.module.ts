import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComNoteComponent } from './com-note/com-note.component';
import { PipeSensorPipe } from './pipe-sensor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComNoteComponent,
    PipeSensorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
