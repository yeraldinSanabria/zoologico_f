import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Action, Column, Diet, Habitat, Species, Type } from '../../interfaces/column';
import { SpeciesService } from '../../services/species.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HabitatService } from '../../services/habitat.service';
import { DietService } from '../../services/diet.service';
import { TypeService } from '../../services/type.service';


@Component({
  selector: 'app-species',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent {


  private readonly servicesSpecies = inject(SpeciesService);
  private readonly servicesHabitat = inject(HabitatService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly servicesDiet = inject(DietService);
  private readonly servicesType = inject(TypeService);

  public form!: FormGroup;

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
      label: 'Tipo',
      value: 'type'
    },
    {
      label: 'Hábitat',
      value: 'habitats'
    },
    {
      label: 'Dieta',
      value: 'diet'
    },
    {
      label: 'Extinto',
      value: 'extinct'
    }
  ]

  public rowsSpecies: Species[] = [];
  public rowsHabitats: Habitat[] = [];
  public rowsDiets: Diet[] = [];
  public rowsTypes: Type[] = [];

  async ngOnInit(): Promise<void> {
    this.createForm();
    this.rowsSpecies = await this.getSpecies();
    this.rowsHabitats = await this.listHabitat();
    this.rowsDiets = await this.listDiet();
    this.rowsTypes = await this.listType();
  }

  public async getSpecies() {
    let listar = await this.servicesSpecies.getService();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [],
      type_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      habitats_id: ['', [Validators.required]],
      diet_id: ['', [Validators.required]],
      extinct: ['', [Validators.required]],
      action: ['N', [Validators.required]]
    })
  }

  public async onSave() {
    let value = this.form.value
    if (value.action == 'N') {
      await this.servicesSpecies.postSpecies(this.form.value);
    }

    if (value.action == 'E') {
      await this.servicesSpecies.putSpecies(this.form.value)
    }

    this.form.reset();
    this.form.get('action')?.setValue('N');
    await this.consultData();

  }

  public async listHabitat() {
    let listar = await this.servicesHabitat.getHabitat();
    return listar;
  }

  public async listDiet() {
    let listar = await this.servicesDiet.getDiet();
    return listar;
  }

  public async listType() {
    let listar = await this.servicesType.getType();
    return listar;
  }

  private async consultData() {
    this.rowsSpecies = [];
    this.rowsSpecies = await this.getSpecies();
  }

  public async actions(event: Action) {

    if (event.action == 1) {
      this.form.patchValue({
        id: event.row.id,
        type_id: event.row.type_id,
        name: event.row.name,
        habitats_id: event.row.habitats_id,
        diet_id: event.row.diet_id,
        extinct: event.row.extinct,
        action: 'E'
      })
    }
    if (event.action == 0) {
      await this.servicesSpecies.deleteSpecies(event.row);
      await this.consultData();
    }
  }
}
