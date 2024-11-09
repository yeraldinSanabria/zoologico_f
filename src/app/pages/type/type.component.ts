import { Component, inject } from '@angular/core';
import { Column, Type } from '../../interfaces/column';
import { TableComponent } from '../../components/table/table.component';
import { TypeService } from '../../services/type.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss'
})
export class TypeComponent {

  private readonly servicesType = inject(TypeService);
  private readonly formBuilder = inject(FormBuilder);

  public form!: FormGroup;

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
    this.createForm();
    this.rowsType = await this.getTypes();
  }

  public async getTypes() {
    let listar = await this.servicesType.getType();
    return listar;
  }
  
  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    })
  }

  public onSave(){
    console.log(this.form.value)
  }
}