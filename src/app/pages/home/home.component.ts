import { Component, inject } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { Animals } from '../../interfaces/column';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {

	private readonly servicesAnimals = inject(AnimalsService);
	public rowsAnimal: Animals[] = [];

	async ngOnInit(): Promise<void> {
		await this.consultData();

	}

	private async consultData() {
		this.rowsAnimal = [];
		this.rowsAnimal = await this.getAnimals();
	}

	public async getAnimals() {
		let listar = await this.servicesAnimals.getAnimals();
		return listar;
	}

}
