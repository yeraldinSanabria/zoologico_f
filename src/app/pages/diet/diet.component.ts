import { Component, inject } from '@angular/core';
import { Action, Column, Diet } from '../../interfaces/column';
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
    await this.consultData();
  }

  public async getDiets() {
    let listar = await this.servicesDiet.getDiet();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      action: ['N', [Validators.required]],
    })
  }

  public async onSave() {
    let value = this.form.value
    if (value.action == 'N') {
      await this.servicesDiet.postDiet(this.form.value);
    }

    if (value.action == 'E') {
      await this.servicesDiet.putDiet(this.form.value);
    }

    this.form.reset();
    this.form.get('action')?.setValue('N');
    await this.consultData();
  }

  private async consultData() {
    this.rowsDiets = [];
    this.rowsDiets = await this.getDiets();
  }

  public async actions(event: Action) {

    if (event.action == 1) {
      this.form.patchValue({
        id: event.row.id,
        type: event.row.type,
        description: event.row.description,
        action: 'E'
      })
    }
    if (event.action === 0) {
      await this.servicesDiet.deleteDiet(event.row);
      await this.consultData();
    }
  }
}
