import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Column } from '../../interfaces/column'

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [TableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	public tableHabitats: Column[] = [
		{
			label: 'id',
			value: 'id'
		},
		{
			label: 'name',
			value: 'nombre'
		},
		{
			label: 'description',
			value: 'descripcion'
		}
	]

	public tableDiet: Column[] = [
		{
			label: 'id',
			value: 'id'
		},
		{
			label: 'type',
			value: 'tipo'
		},
		{
			label: 'description',
			value: 'descripcion'
		}
	]

	public tableTypes: Column[] = [
		{
			label: 'id',
			value: 'id'
		},
		{
			label: 'name',
			value: 'nombre'
		},
		{
			label: 'description',
			value: 'descripcion'
		}
	]

	public tableSpecies: Column[] = [
		{
			label: 'id',
			value: 'id'
		},
		{
			label: 'name',
			value: 'nombre'
		},
		{
			label: 'extinct',
			value: 'extinto'
		}
	]

	public tableAnimals: Column[] = [
		{
			label: 'id',
			value: 'id'
		},
		{
			label: 'name',
			value: 'nombre'
		}
	]
}