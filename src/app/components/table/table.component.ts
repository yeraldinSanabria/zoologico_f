import { Component, Input } from '@angular/core';
import { Column } from '../../interfaces/column';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss'
})
export class TableComponent {

	@Input() set columns(columns: Column[]) {
		this._columns = columns;
	}

	public _columns: Column[] = []
}
