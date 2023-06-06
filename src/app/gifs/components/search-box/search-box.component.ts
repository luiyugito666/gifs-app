import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
    template: `
  <h5>Buscar: </h5>
  <input type="text" class="form-control" placeholder="Buscar gifs..."
  #txtTagInput  
  (keyup.enter)="searchTag()"
  >
  `
})

export class SearchBoxComponent{ 
  //el viewchild es una referencia local
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() { }
  //searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
   }
 
}