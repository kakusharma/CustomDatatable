import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';

export class GenericDatasource<T> implements DataSource<T>, OnDestroy {
    private subject = new BehaviorSubject<T[]>([]);
    dataSubscription: Subscription;
    constructor(private dataService: DataService<T>) { }
    connect(collectionViewer: CollectionViewer): Observable<T[]> {
        return this.subject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
    }
    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
    }
    initDataSource(url: string) {
        this.dataSubscription = this.dataService.getData(url)
            .subscribe(
                (data: T[]) => {
                    this.subject.next(data);
                }
            );
    }
}
