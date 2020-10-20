import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    //le pongo data: any porque no se como va a llegar la data y sino se supone que es una respuesta del http

    this.loading = true;
    this.error = false;
    
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, ( errorObserver ) => {
      this.loading = false;
      this.error = true; 
      this.mensajeError= errorObserver.error.error.message;
    });
  }


  ngOnInit(): void {
  }


}
