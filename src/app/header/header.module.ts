import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

import {
	MatToolbarModule,
	MatIconModule
} from '@angular/material';

@NgModule({
	exports: [
		MatToolbarModule,
		MatIconModule
	]
})
export class ToolbarModules {}

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		ToolbarModules
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule {}
