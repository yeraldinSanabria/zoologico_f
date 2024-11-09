import { Component, inject } from '@angular/core';
import { Action, Column, Habitat } from '../../interfaces/column';
import { TableComponent } from '../../components/table/table.component';
import { HabitatService } from '../../services/habitat.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habitat',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './habitat.component.html',
  styleUrl: './habitat.component.scss'
})
export class HabitatComponent {

  private readonly servicesHabitat = inject(HabitatService);
  private readonly formBuilder = inject(FormBuilder);

  public form!: FormGroup;

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
    this.createForm();
    await this.consultData();
  }

  public async getHabitats() {
    let listar = await this.servicesHabitat.getHabitat();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      action: ['N', [Validators.required]]
    })
  }

  public async onSave() {
    let value = this.form.value
    if (value.action == 'N') {
      await this.servicesHabitat.postHabitat(this.form.value);
    }

    if (value.action == 'E') {
      await this.servicesHabitat.putHabitat(this.form.value)
    }

    this.form.reset();
    this.form.get('action')?.setValue('N');
    await this.consultData();
  }


  private async consultData() {
    this.rowsHabitat = [];
    this.rowsHabitat = await this.getHabitats();
  }

  public async actions(event: Action) {

    if (event.action == 1) {
      this.form.patchValue({
        id: event.row.id,
        name: event.row.name,
        description: event.row.description,
        action: 'E'
      })
    }
    if (event.action == 0) {
      await this.servicesHabitat.deletetHabitat(event.row);
      await this.consultData();
    }
  }
}
