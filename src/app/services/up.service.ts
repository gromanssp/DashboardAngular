import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class UpService {

  uploadFile(file: File, tipo: string, id: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('imagen', file, file.name);

      xhr.onreadystatechange = () => {

        if ( xhr.readyState === 4 ) {

          if ( xhr.status === 200) {
            console.log( 'Imagen subida' );
            resolve( JSON.parse(xhr.response) );
          } else {
            console.log('Fallo la subida');
            reject( xhr.response );
          }
        }
    };

      const url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url, true);
      xhr.send( formData );
    });
  }
  
}
