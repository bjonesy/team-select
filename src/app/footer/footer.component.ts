import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input() copyright: string;

	constructor() {
		this.copyright = 'Copyright \u00A9 2017';
	}

	ngOnInit() {
		this.addCopyright();
	}

	addCopyright() {
		return this.copyright;
	}

}
