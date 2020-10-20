import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; //importo el map

@Injectable({
  //forma automatica de importar el servicio
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio de SPOTIFY funcionando...")
  }


  //Centralizo las querys de busqueda
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer aBQCZFMSiSxWIGS82S2f3YdcCBOmULMKwLdjt2zJUWHQOkoJkL7eZjJX8g51nNJZOeJjITHK8H0VDLC_fDcM'
    })

    return this.http.get(url, { headers });
  }



  getNewReleases() {
    //utilizo el pipe para filtrar la informacion que necesito
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;//pongo albums para que busque la propiedad albums dentro del data
      }));
  };

  showArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }


  getArtists(data: string) {
    //Se reemplaza el termino de busqueda que recibimos
    return this.getQuery(`search?q= ${data} &type=artist`)
    .pipe(map(data => {
        return data['artists'].items;
      }));
  }


  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map ( data => data['tracks']));
  }
}





