import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Type } from '../interfaces/column';

@Injectable({
	providedIn: 'root'
})
export class TypeService {
	private readonly url_base = environment.url_base;
	private readonly http = inject(HttpClient);

	public getType(): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.get(`${this.url_base}/types`).subscribe({
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


	public postType(data: Type): Promise<any> {

		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			let dataSend = {
				name: data.name
			}
			subscription = this.http.post(`${this.url_base}/types`, dataSend).subscribe({
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


	public putType(data: Type): Promise<any> {

		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			let dataSend = {
				name: data.name
			}
			subscription = this.http.put(`${this.url_base}/types/${data.id}`, dataSend).subscribe({
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

	public deleteType(data: Type): Promise<any> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.delete(`${this.url_base}/types/${data.id}`).subscribe({
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
