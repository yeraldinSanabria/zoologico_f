import { Component, inject } from '@angular/core';
import { Column, Diet } from '../../interfaces/column';
import { DietService } from '../../services/diet.service';
import { TableComponent } from '../../components/table/table.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent {

  private readonly servicesDiet = inject(DietService);
  private readonly formBuilder = inject(FormBuilder);

  public form!: FormGroup;

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
      label: 'Descripción',
      value: 'description'
    }
  ]

  public rowsDiets: Diet[] = [];

  async ngOnInit(): Promise<void> {
    this.createForm();
    this.rowsDiets = await this.getDiets();
  }

  public async getDiets() {
    let listar = await this.servicesDiet.getDiet();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      type: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  public onSave(){
    console.log(this.form.value)
  }
}
