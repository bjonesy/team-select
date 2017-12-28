import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';

import { NflFootball } from '../../services/nfl-football';
import { NflFootballService } from '../../services/nfl-football.service';

@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
	teams: NflFootball[];

	constructor(
		private nflFootballService: NflFootballService,
		private render: Renderer
	) { }

	ngOnInit() {
		this.getTeams();
	}

	getTeams(): void {
		this.nflFootballService.getTeams()
		.subscribe(teams => this.teams = teams);
	}

	delete(team: NflFootball): void {
		this.teams = this.teams.filter(t => t !== team);
		this.nflFootballService.deleteTeam(team).subscribe();
	}

	toggle(team) {
		team.hide = !team.hide;
	}

}
