import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NflFootballService } from '../services/nfl-football.service';

import { HeaderModule } from './header/header.module';
import { TeamsModule } from './teams/teams.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		),
		HeaderModule,
		TeamsModule,
		FooterModule
	],
	providers: [ NflFootballService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
