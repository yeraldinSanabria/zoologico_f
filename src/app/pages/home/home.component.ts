import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';



@Component({
	selector: 'app-home',
	standalone: true,
	imports: [TableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {


	async ngOnInit(): Promise<void> {
	
	}

}
