import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Animals } from '../interfaces/column';

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
	public postSpecies(data: Animals): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.post(`${this.url_base}/species`, data).subscribe({
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
