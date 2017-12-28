import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { NflFootball } from './nfl-football';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NflFootballService {
	private teamsUrl = 'api/nflteams';  // URL to web api

	constructor( private http: HttpClient ) { }

	/** GET heroes from the server */
	getTeams (): Observable<NflFootball[]> {
		return this.http.get<NflFootball[]>(this.teamsUrl)
		.pipe(
			tap(teams => console.log('got teams')),
			catchError(this.handleError('getTeams', []))
		);
	}

	/** DELETE: delete the hero from the server */
	deleteTeam (team: NflFootball | number): Observable<NflFootball> {
		const id = typeof team === 'number' ? team : team.id;
		const url = `${this.teamsUrl}/${id}`;

		return this.http.delete<NflFootball>(url, httpOptions).pipe(
			tap(_ => console.log('Deleted')),
			catchError(this.handleError<NflFootball>('deleteTeam'))
		);
	}

	/**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}
