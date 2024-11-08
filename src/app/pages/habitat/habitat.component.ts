import { Component, inject } from '@angular/core';
import { Column, Habitat } from '../../interfaces/column';
import { TableComponent } from '../../components/table/table.component';
import { HabitatService } from '../../services/habitat.service';

@Component({
  selector: 'app-habitat',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './habitat.component.html',
  styleUrl: './habitat.component.scss'
})
export class HabitatComponent {

  private readonly servicesHabitat = inject(HabitatService);

  public tableHabitats: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Nombre',
      value: 'name'
    },
    {
      label: 'descripción',
      value: 'description'
    }
  ]

  public rowsHabitat: Habitat[] = [];
  servicesDiet: any;

  async ngOnInit(): Promise<void> {
    this.rowsHabitat = await this.getHabitats();
    console.log(this.rowsHabitat)
  }

  public async getHabitats() {
    let listar = await this.servicesHabitat.getHabitat();
    return listar;
  }

}
