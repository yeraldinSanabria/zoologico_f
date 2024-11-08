import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Animals, Column } from '../../interfaces/column';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss'
})
export class AnimalsComponent {

  private readonly servicesAnimals = inject(AnimalsService);

  public tableAnimals: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Nombre',
      value: 'name'
    }
  ]
  public rowsAnimal: Animals[] = [];

  async ngOnInit(): Promise<void> {
    this.rowsAnimal = await this.getAnimals();
  }

  public async getAnimals() {
    let listar = await this.servicesAnimals.getAnimals();
    return listar;
  }
}
