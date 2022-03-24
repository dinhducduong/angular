import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  listQuestion(id: any): Observable<any> {
    return this.http.get<any>(`${environment.question_api}/${id}`);
  }
}

