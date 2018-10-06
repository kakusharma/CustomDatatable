import { NgModule } from '@angular/core';
import { MatTableModule,  MatInputModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';

@NgModule({
    exports: [ MatTableModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatOptionModule ]
})
export class MaterialModule {

}
