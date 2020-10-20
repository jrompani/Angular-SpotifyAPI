import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];

  //El activated route nos ofrece diversos detalles sobre la ruta que estamos
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe( (params: any) => {
     this.getArtist( params['id'] );
     this.getTopTracks( params['id'] );
     //console.log(params['id']);
    })
  }

  getArtist(id: string){
    this.spotify.showArtist( id ).subscribe(
      artist => {
        this.artist = artist;
    });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks( id )
    .subscribe( topTracks => {
        this.topTracks = topTracks;
        console.log(topTracks);
      }
    )
  }

  ngOnInit(): void {
  }

}
