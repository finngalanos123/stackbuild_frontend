import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '@core/constants/general';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  sendConfirmationCode(params) {
    return this.httpClient.post(`${API_URL}auth/send-confirmation-code`, params);
  }
}
