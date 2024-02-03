import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeadServicesService {
  constructor(private _httpClient: HttpClient) {}

  store(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        data,
      };
      this._httpClient.post(`${environment.api}`, body).subscribe(
        (res) => resolve(res),
        (err) => reject(err)
      );
    });
  }
}
