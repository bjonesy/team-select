import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';

import {
	MatButtonModule,
	MatGridListModule,
	MatIconModule
} from '@angular/material';

@NgModule({
	exports: [
		MatButtonModule,
		MatGridListModule,
		MatIconModule
	]
})
export class TeamsModules {}

@NgModule({
	declarations: [
		TeamsComponent
	],
	imports: [
		CommonModule,
		TeamsModules
	],
	exports: [
		TeamsComponent
	]
})
export class TeamsModule {}
