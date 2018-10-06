import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';

export class GenericDatasource<T> implements DataSource<T> {
    private subject = new BehaviorSubject<T[]>([]);
    constructor(private dataService: DataService<T>) { }
    connect(collectionViewer: CollectionViewer): Observable<T[]> {
        return this.subject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
    }
    initDataSource(url: string) {
        this.dataService.getData(url)
            .subscribe(
                (data: T[]) => {
                   this.subject.next(data);
                  }
            );
    }
}
