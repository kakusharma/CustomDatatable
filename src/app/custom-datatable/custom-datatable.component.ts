import { Component, OnInit, Input } from '@angular/core';
import { GenericDatasource } from '../datasource/generic-datasource';
import { DataService } from '../services/data.service';
export class Abc {
  name: string;
}

@Component({
  selector: 'app-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: ['./custom-datatable.component.css']
})
export class CustomDatatableComponent<T> implements OnInit {
  @Input() url = '';
  @Input() modelMetadata = [];
  dataSource: GenericDatasource<T>;
  displayedColumns: string[];
  constructor(private dataService: DataService<T>) { }
  ngOnInit() {
    this.modelMetadata = this.modelMetadata.sort((a, b) => {
      if (a.order < b.order) { return -1; } else if (a.order > b.order) { return 1; }
      return 0;
    });
    this.displayedColumns = this.modelMetadata.map(a => a.propertyName);
    this.dataSource = new GenericDatasource(this.dataService);
    this.dataSource.initDataSource(this.url);
  }
}
