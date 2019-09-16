import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  numberActive: number = 0;
  numberInactive: number = 0;

	logCount(status: boolean) {
		if (status) {
			this.numberActive++;
			console.log(`From Inactive to Active: ${this.numberActive}`);
		} else {
			this.numberInactive++;
			console.log(`From Active to Inactive: ${this.numberInactive}`);
		}
	}
}