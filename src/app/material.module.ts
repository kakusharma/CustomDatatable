import { NgModule } from '@angular/core';
import { MatTableModule, MatButtonModule, MatToolbarModule, MatInputModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [ MatTableModule, MatInputModule ]
})
export class MaterialModule {

}
