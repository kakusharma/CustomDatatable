import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { User } from '..//models/user.model';
import { MatTableDataSource } from '@angular/material';
import { PeriodicElement, Students } from '../models/table-datasource';
import 'reflect-metadata';

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

const studantData: Students[] = [
  { name: 'Gaurav', rollNumber: 1, marks: 95, result: 'Pass' },
  { name: 'Varun', rollNumber: 2, marks: 90, result: 'Pass' },
  { name: 'Ram', rollNumber: 3, marks: 24, result: 'Fail' },
  { name: 'Saurabh', rollNumber: 4, marks: 40, result: 'Pass' },
  { name: 'Himanshu', rollNumber: 5, marks: 73, result: 'Pass' }
];
@Component({
  selector: 'app-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: ['./custom-datatable.component.css']
})
export class CustomDatatableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(studantData);

  constructor() { }
  ngOnInit() {
    this.displayedColumns =  Object.keys(studantData[0]);
  }


}
