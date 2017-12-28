import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const nflteams = [
			{ id: 1, name: 'Arizona Cardinals', class: 'cardinals' },
			{ id: 2, name: 'Atlanta Falcons', class: 'falcons' },
			{ id: 3, name: 'Baltimore Ravens', class: 'ravens' },
			{ id: 4, name: 'Buffalo Bills', class: 'bills' },
			{ id: 5, name: 'Carolina Panthers', class: 'panthers' },
			{ id: 6, name: 'Chicago Bears', class: 'bears' },
			{ id: 7, name: 'Cincinnati Bengals', class: 'bengals' },
			{ id: 8, name: 'Cleveland Browns', class: 'browns' },
			{ id: 9, name: 'Dallas Cowboys', class: 'cowboys' },
			{ id: 10, name: 'Denver Broncos', class: 'broncos' },
			{ id: 11, name: 'Detroit Lions', class: 'lions' },
			{ id: 12, name: 'Green Bay Packers', class: 'packers' },
			{ id: 13, name: 'Houston Texans', class: 'texans' },
			{ id: 14, name: 'Indianapolis Colts', class: 'colts' },
			{ id: 15, name: 'Jacksonville Jaguars', class: 'jaguars' },
			{ id: 16, name: 'Kansas City Chiefs', class: 'chiefs' },
			{ id: 17, name: 'Miami Dolphins', class: 'dolphins' },
			{ id: 18, name: 'Minnesota Vikings', class: 'vikings' },
			{ id: 19, name: 'New England Patriots', class: 'patriots' },
			{ id: 20, name: 'New Orleans Saints', class: 'saints' },
			{ id: 21, name: 'New York Giants', class: 'giants' },
			{ id: 22, name: 'New York Jets', class: 'jets' },
			{ id: 23, name: 'Oakland Raiders', class: 'raiders' },
			{ id: 24, name: 'Philadeplphia Eagles', class: 'eagles' },
			{ id: 25, name: 'Pittsburgh Steelers', class: 'steelers' },
			{ id: 26, name: 'San Diego Chargers', class: 'chargers' },
			{ id: 27, name: 'San Francisco 49ers', class: 'sanfran' },
			{ id: 28, name: 'Seattle Seahawks', class: 'seahwaks' },
			{ id: 29, name: 'St. Louis Rams', class: 'rams' },
			{ id: 30, name: 'Tampa Bay Buccaneers', class: 'buccaneers' },
			{ id: 31, name: 'Tennessee Titans', class: 'titans' },
			{ id: 32, name: 'Washington Redskins', class: 'redskins' }
		];
		return {nflteams};
	}
}
