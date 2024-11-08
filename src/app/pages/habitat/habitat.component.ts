import { Component, inject } from '@angular/core';
import { Column, Habitat } from '../../interfaces/column';
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
    this.rowsHabitat = await this.getHabitats();
  }

  public async getHabitats() {
    let listar = await this.servicesHabitat.getHabitat();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  public onSave() {
    console.log(this.form.value)
  }
}
