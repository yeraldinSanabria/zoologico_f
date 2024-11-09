import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Animals } from '../interfaces/column';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private readonly url_base = environment.url_base;
  private readonly http = inject(HttpClient);

  public getAnimals(): Promise<any> {
    return new Promise((resolve, reject) => {
      let subscription: Subscription;
      subscription = this.http.get(`${this.url_base}/animals`).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (error: any) => {
          reject(error);
        },
        complete: () => {
          if (subscription) {
            subscription.unsubscribe();
          }
        }
      })
    });
  }

  public postAnimals(data: Animals): Promise<any> {
    return new Promise((resolve, reject) => {
      let subscription: Subscription;
      let dataSend = {
        name: data.name,
        species: data.species_id
      }
      subscription = this.http.post(`${this.url_base}/animals`, dataSend).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (error: any) => {
          reject(error);
        },
        complete: () => {
          if (subscription) {
            subscription.unsubscribe();
          }
        }
      })
    });
  }


  public putAnimals(data: Animals): Promise<any> {
    return new Promise((resolve, reject) => {
      let subscription: Subscription;
      let dataSend = {
        name: data.name,
        species_id: data.species_id
      }
      subscription = this.http.put(`${this.url_base}/animals/${data.id}`, dataSend).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (error: any) => {
          reject(error);
        },
        complete: () => {
          if (subscription) {
            subscription.unsubscribe();
          }
        }
      })
    });
  }
}

