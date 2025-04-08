import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchemeService, Scheme } from '../../services/scheme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scheme-finder',
  templateUrl: './scheme-finder.component.html',
  styleUrls: ['./scheme-finder.component.scss']
})
export class SchemeFinderComponent implements OnInit, OnDestroy {
  states: string[] = [];
  categories: string[] = [];
  selectedState: string = '';
  selectedCategory: string = '';
  filteredSchemes: Scheme[] = [];
  isLoading: boolean = true;
  hasSearched: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private schemeService: SchemeService) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private loadData() {
    this.isLoading = true;
    
    // Subscribe to states
    const statesSub = this.schemeService.states$.subscribe(states => {
      this.states = states;
      this.checkLoadingComplete();
    });
    
    // Subscribe to categories
    const categoriesSub = this.schemeService.categories$.subscribe(categories => {
      this.categories = categories;
      this.checkLoadingComplete();
    });
    
    this.subscriptions.push(statesSub, categoriesSub);
  }
  
  private checkLoadingComplete() {
    if (this.states.length > 0 && this.categories.length > 0) {
      this.isLoading = false;
    }
  }

  findSchemes() {
    if (this.selectedState && this.selectedCategory) {
      this.hasSearched = true;
      this.filteredSchemes = this.schemeService.filterSchemes(
        this.selectedState,
        this.selectedCategory
      );
    }
  }
}
