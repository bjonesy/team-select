import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

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
		FooterComponent
	],
	imports: [
		ToolbarModules
	],
	exports: [
		FooterComponent
	]
})
export class FooterModule {}
