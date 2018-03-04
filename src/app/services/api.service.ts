
// Angular modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class APIService
{
  private protocol = 'http://';
  private domain = 'localhost:8000';

  constructor
  (
    private http: HttpClient
  )
  { }

  /**
   * Performs an HTTP GET request for the given resource.
   * @param resource - name/url of the resource to retrieve
   */
  public httpGetMany(resource: string): Observable<object[]>
  {
    return this.http.get<object[]>(this.protocol + this.domain + '/' + resource + '/');
  }

  /**
   * Performs an HTTP GET request for the given resource.
   * @param resource - name/url of the resource to retrieve
   */
  public httpGetOne(resource: string, id: number): Observable<object>
  {
    return this.http.get<object>(this.protocol + this.domain + '/' + resource + '/' + id + '/');
  }
}
