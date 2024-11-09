import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs';
import { Diet } from '../interfaces/column';

@Injectable({
	providedIn: 'root'
})
export class DietService {

	private readonly url_base = environment.url_base;
	private readonly http = inject(HttpClient);

	public getDiet(): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.get(`${this.url_base}/diet`).subscribe({
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

	public postType(data: Diet): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.post(`${this.url_base}/diet`,data).subscribe({
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
