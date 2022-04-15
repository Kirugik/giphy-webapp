import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=20`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }

  searchGifs(gifName:string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=20`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }

  getSearchedGifs() {
    return this.gifs.asObservable();
  }
}
