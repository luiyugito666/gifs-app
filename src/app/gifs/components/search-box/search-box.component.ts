import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

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
//en el consturcto es donde inyectamos el servicio
  constructor(private gifsService:GifsService) { }
  //searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
    
   }
 
}