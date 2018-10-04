import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CustomDatatableComponent } from './custom-datatable/custom-datatable.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CustomDatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [MaterialModule, CustomDatatableComponent],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
