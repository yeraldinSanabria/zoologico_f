import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Animals, Column, Species } from '../../interfaces/column';
import { AnimalsService } from '../../services/animals.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss'
})
export class AnimalsComponent {

  private readonly servicesAnimals = inject(AnimalsService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly servicesSpecies = inject(SpeciesService);

  public form!: FormGroup;

  public tableAnimals: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Nombre',
      value: 'name'
    },
    {
      label: ' Especie',
      value: 'species_id'
    }
  ]
  public rowsAnimal: Animals[] = [];
  public rowsSpecies: Species[] = [];

  async ngOnInit(): Promise<void> {
    this.createForm();
    await this.consultData();
    this.rowsSpecies = await this.listSpecies();

  }

  public async getAnimals() {
    let listar = await this.servicesAnimals.getAnimals();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      species_id: ['', [Validators.required]],
    })
  }

  public async onSave() {
    await this.servicesAnimals.postAnimals(this.form.value);
    this.form.reset();
    await this.consultData();

  }

  private async consultData() {
    this.rowsAnimal = [];
    this.rowsAnimal = await this.getAnimals();
  }

  public async listSpecies() {
    let listar = await this.servicesSpecies.getService();
    return listar;
  }

}
