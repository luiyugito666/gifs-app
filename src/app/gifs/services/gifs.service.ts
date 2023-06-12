import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif} from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {
  public gifList: Gif[]=[];
  private   _tagsHistory: string[]  = [];
  private   apiKeys: string         = 'YNDrsB86zu6lMiIcaVod8wdWLSUvpkHk'
  private serviceURL: string = 'http://api.giphy.com/v1/gifs';
  
  //https://quicktype.io/ ayuda a tipar
  
  constructor(private http:HttpClient) { }
    
  get tagsHistory() {
    return [...this._tagsHistory];
  }
  
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) { 
      this._tagsHistory = this.tagsHistory.filter(e => e != tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10)

   }


 searchTag(tag: string):void{
    if (tag.length == 0) return;
    this.organizeHistory(tag);
   const params = new HttpParams()
     .set('api_key', this.apiKeys)
     .set('limit', '10')
   .set('q',tag)
   
   
    this.http.get<SearchResponse>(`${this.serviceURL}/search?`,{params}).subscribe(resp => {
      this.gifList = resp.data;
      console.log({ gifs: this.gifList });
     
    })
  }
  
}