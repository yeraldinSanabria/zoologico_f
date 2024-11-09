import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, Column } from '../../interfaces/column';
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

	@Output() dataActions = new EventEmitter<Action>()

	public _rows: any[] = [];

	public action(action:number, row:any){
		let actionSend:Action = {
			action,
			row
		}
		this.dataActions.emit(actionSend)
	}
}
