import { Component, inject } from '@angular/core';
import { Column, Diet } from '../../interfaces/column';
import { DietService } from '../../services/diet.service';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {


  private readonly servicesDiet = inject(DietService);

  public tableDiet: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Tipo',
      value: 'type'
    },
    {
      label: 'Description',
      value: 'description'
    },
    {
      label: 'Estado',
      value: 'state'
    }
  ]

  public rowsDiets: Diet[] = [];

  async ngOnInit(): Promise<void> {
    this.rowsDiets = await this.getDiets();
    console.log(this.rowsDiets)
  }

  public async getDiets() {
    let listar = await this.servicesDiet.getDiet();
    return listar;
  }
}
