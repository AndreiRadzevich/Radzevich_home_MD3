import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logsCollection: AngularFirestoreCollection<Log>;
  logDoc: AngularFirestoreDocument<Log>;
  logs: Log[];
  log: Log;

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor(private afs: AngularFirestore) {
    this.logsCollection = this.afs.collection('logs', ref => ref.orderBy('date') );
  }

  getLogs(): Observable<Log[]> {
   return this.logsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Log;
          data.id = action.payload.doc.id;
          return data;
        });
      }),
      tap((log: Log[]) => console.log(log)),
      map(logs => logs.reverse())
   )
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logsCollection.add(log);
  }

  updateLog(log: Log) {
      this.logDoc = this.afs.doc(`logs/${log.id}`);
      this.logDoc.update(log);
    }

  deleteLog(log: Log) {
    this.logDoc = this.afs.doc(`logs/${log.id}`);
    this.logDoc.delete();
  }

  clearState() {
    this.stateSource.next(true);
  }
}
