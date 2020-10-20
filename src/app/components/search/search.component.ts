import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }
  
  ngOnInit(): void {
    
  }

  searchArtists(data: string) {
    this.loading= true;
    this.spotify.getArtists(data).subscribe(
      (data: any) => {
        this.artists = data;
        this.loading= false;
      }
    );
  }

}
