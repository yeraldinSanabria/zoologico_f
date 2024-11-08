import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Column, Species } from '../../interfaces/column';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent {


  private readonly servicesSpecies = inject(SpeciesService);

  public tableSpecies: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Nombre',
      value: 'name'
    },
    {
      label: 'Extinto',
      value: 'extinct'
    }
  ]

  public rowsSpecies: Species[] = [];

  async ngOnInit(): Promise<void> {
    this.rowsSpecies = await this.getSpecies();
  }

  public async getSpecies() {
    let listar = await this.servicesSpecies.getService();
    return listar;
  }
}
