import { Component, inject } from '@angular/core';
import { Action, Column, Type } from '../../interfaces/column';
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
    await this.consultData();
  }

  public async getTypes() {
    let listar = await this.servicesType.getType();
    return listar;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      action: ['N', [Validators.required]],
    })
  }

  public async onSave() {
    let value = this.form.value
    if (value.action == 'N') {
      await this.servicesType.postType(this.form.value);
    }

    if (value.action == 'E') {
      await this.servicesType.putType(this.form.value)
    }

    this.form.reset();
    this.form.get('action')?.setValue('N');
    await this.consultData();

  }

  private async consultData() {
    this.rowsType = [];
    this.rowsType = await this.getTypes();
  }

  public actions(event: Action) {

    if (event.action == 1) {
      this.form.patchValue({
        id:event.row.id,
        name: event.row.name,
        action: 'E'
      })
    }
  }
}