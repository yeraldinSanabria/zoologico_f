import { Component, Input } from '@angular/core';
import { Column } from '../../interfaces/column';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss'
})
export class TableComponent {

	@Input() set columns(columns: Column[]) {
		this._columns = columns;
	}

	public _columns: Column[] = []

	@Input() set rows(rows: any[]) {
		this._rows = rows;
	}

	public _rows: any[] = []
}
