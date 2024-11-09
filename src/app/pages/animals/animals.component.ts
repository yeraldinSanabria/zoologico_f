import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Animals, Column } from '../../interfaces/column';
import { AnimalsService } from '../../services/animals.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  public form!: FormGroup;

  public tableAnimals: Column[] = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Nombre',
      value: 'name'
    }
  ]
  public rowsAnimal: Animals[] = [];

  async ngOnInit(): Promise<void> {
    this.createForm();
    this.rowsAnimal = await this.getAnimals();
  }

  public async getAnimals() {
    let listar = await this.servicesAnimals.getAnimals();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    })
  }

  public onSave() {
    console.log(this.form.value)
  }
}
