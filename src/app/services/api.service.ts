import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  public readonly apiUrl = 'https://rtxapi.evelthost.com/';

  constructor(private http: HttpClient) {
  }

  get(url) {
    // const headers = new HttpHeaders().set('Authorization', 'token: ' + localStorage.getItem('token'));
    const options = {
      headers: {
        'token' :localStorage.getItem('token')
      }
    };
    return this.http.get(this.apiUrl + url, options);
  }

  post(url, data) {
    return this.http.post(this.apiUrl + url, data);
  }


}
