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
  dataSource: GenericDatasource<T>;
  displayedColumns: string[];
  constructor(private dataService: DataService<T>) { }
  ngOnInit() {
    this.dataSource = new GenericDatasource(this.dataService);
    this.dataSource.initDataSource(this.url)
      .subscribe(
        (data: T[]) => {
          if (data.length > 0) {
            this.displayedColumns = Object.keys(data[0]);
          }
        }
      );
  }
}
