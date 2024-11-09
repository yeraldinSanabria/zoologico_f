import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Species } from '../interfaces/column';

@Injectable({
	providedIn: 'root'
})
export class SpeciesService {

	private readonly url_base = environment.url_base;
	private readonly http = inject(HttpClient);

	public getService(): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.get(`${this.url_base}/species`).subscribe({
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
	public postSpecies(data: Species): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			let dataSend = {
				type_id: data.type_id,
				name: data.name,
				habitats_id: data.habitats_id,
				diet_id: data.diet_id,
				extinct: data.extinct
			}
			subscription = this.http.post(`${this.url_base}/species`, dataSend).subscribe({
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

	public putSpecies(data: Species): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			let dataSend = {
				type_id: data.type_id,
				name: data.name,
				habitats_id: data.habitats_id,
				diet_id: data.diet_id,
				extinct: data.extinct
			}
			subscription = this.http.put(`${this.url_base}/species/${data.id}`, dataSend).subscribe({
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
	public deleteSpecies(data: Species): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.delete(`${this.url_base}/species/${data.id}`).subscribe({
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
