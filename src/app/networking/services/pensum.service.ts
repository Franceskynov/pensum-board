import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensumService {

  private readonly options: object;
  constructor(
    private httpClient: HttpClient
  ) {
    this.options = {observe: 'response'}
  }

  public retrieve(carnet: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/pensum/${carnet}`, this.options);
  }
}
