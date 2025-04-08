import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Scheme {
  state: string;
  category: string;
  name: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  private schemes: Scheme[] = [];
  private statesSubject = new BehaviorSubject<string[]>([]);
  private categoriesSubject = new BehaviorSubject<string[]>([]);
  
  states$ = this.statesSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadSchemes();
  }

  private loadSchemes() {
    this.http.get<{schemes: Scheme[]}>('assets/schemes.json')
      .subscribe(data => {
        this.schemes = data.schemes;
        const states = [...new Set(this.schemes.map(scheme => scheme.state))];
        const categories = [...new Set(this.schemes.map(scheme => scheme.category))];
        
        this.statesSubject.next(states);
        this.categoriesSubject.next(categories);
      });
  }

  getStates(): string[] {
    return this.statesSubject.value;
  }

  getCategories(): string[] {
    return this.categoriesSubject.value;
  }

  filterSchemes(state: string, category: string): Scheme[] {
    return this.schemes.filter(scheme => 
      scheme.state === state && scheme.category === category
    );
  }
}
