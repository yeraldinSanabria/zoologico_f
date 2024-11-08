import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { HabitatComponent } from './pages/habitat/habitat.component';
import { DietComponent } from './pages/diet/diet.component';
import { TypeComponent } from './pages/type/type.component';
import { SpeciesComponent } from './pages/species/species.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'animales', component: AnimalsComponent },
    { path: 'habitat', component: HabitatComponent },
    { path: 'dieta', component: DietComponent },
    { path: 'tipo', component: TypeComponent },
    { path: 'especies', component: SpeciesComponent },


];
