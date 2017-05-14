import { InMemoryDbService } from 'angular-in-memory-web-api';

import { DataComponent } from '../../components/data/data.component';
import { ProjectComponent } from '../../components/project/project.component';

export class DatabaseService implements InMemoryDbService {
  	createDb() {
		let data: DataComponent[] = [
		  	{
		  		id: 1, 
		  		name: 'Mr. Nice',
				coordinates: {
					x: null,
					y: null
				},
				fullScreen: false,
				project: 13
		  	},
			{
		  		id: 2, 
		  		name: 'Narco',
				coordinates: {
					x: null,
					y: null
				},
				fullScreen: false,
				project: 12
			},
		  	{
		  		id: 3, 
		  		name: 'Bombasto',
				coordinates: {
					x: 100,
					y: 100
				},
				fullScreen: false,
				project: 12
		  	}
		];
		let projects: ProjectComponent[] = [
		  	{
		  		id: 11, 
		  		name: 'Mr. Nice',
		  		pages: 1
		  	},
			{
				id: 12, 
				name: 'Narco',
		  		pages: 12
			},
		  	{
		  		id: 13, 
		  		name: 'Bombasto',
		  		pages: 999
		  	}
		];		
	    return {data, projects};
  	}
}
