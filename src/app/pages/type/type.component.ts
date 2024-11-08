import { Component, inject } from '@angular/core';
import { Column, Type } from '../../interfaces/column';
import { TableComponent } from '../../components/table/table.component';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss'
})
export class TypeComponent {

  private readonly servicesType = inject(TypeService);

  public tableTypes: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Nombre',
      value: 'name'
    },

  ]

  public rowsType: Type[] = [];

  async ngOnInit(): Promise<void> {
    this.rowsType = await this.getTypes();
  }

  public async getTypes() {
    let listar = await this.servicesType.getType();
    return listar;
  }
}