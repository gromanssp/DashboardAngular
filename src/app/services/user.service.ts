import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { URL_SERVICIOS } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';
import { UpService } from './up.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userModel?: UserModel | null;
  token: string = '';
  menu: any[] = [];

  constructor(
    public http: HttpClient,
    private router: Router,
    private toast: NgToastService,
    private _upService: UpService
  ) {}

  renewToken() {
    let url = URL_SERVICIOS + '/login/renuevatoken';
    url += '?token=' + this.token;

    return this.http.get( url )
      .pipe(
        map( (resp: any) => {
          this.token = resp.token;
          localStorage.setItem('token', this.token);
          console.log(' Token Renovado');
          return true;
        }),
        catchError( err => {
          this.router.navigate(['/login']);
          this.toast.danger('No fue posible renovar el token', 'No se pudo renovar token');
          return throwError(() => err );
        })
      );
  }

  isLoged() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token') ?? '';
      this.userModel = JSON.parse(localStorage.getItem('usuario') ?? '');
      this.menu = JSON.parse(localStorage.getItem('menu') ?? '');
    } else {
      this.token = '';
      this.userModel = null;
      this.menu = [];
    }
  }

  storeStorage(id: string, token: string, user: UserModel, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(user));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.userModel = user;
    this.token = token;
    this.menu = menu;
  }

  logout() {
    this.token = '';
    this.userModel = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('nombrePropietario');
    localStorage.removeItem('apellidoPropietario');
    localStorage.removeItem('genero');
    localStorage.removeItem('inventario');
    localStorage.removeItem('serieSello');
    localStorage.removeItem('serieChasis');
    localStorage.removeItem('marcaChasis');
    localStorage.removeItem('sistema');
    this.router.navigate(['/login']);
  }


  login( usuario: UserModel, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem( 'email', usuario.email );
    } else {
      localStorage.removeItem( 'email' );
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
    .pipe(
      map( (resp: any) => {
        console.log(`UserService: ${usuario}, Resp: ${resp}, URL: ${url}`);
        this.storeStorage( resp.id, resp.token, resp.Usuario, resp.menu);
        return true;
      }),
      catchError( err => {
        this.toast.danger(err.error.mensaje, 'Error en el login');
        return throwError(() => err );
      })
    );
  }

  addUser( user: UserModel ) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post( url, user )
      .pipe(
        map( (resp: any) => {
      this.toast.success(user.email, 'User created')
      return resp;
    }),
      catchError( err => {
        return throwError(() => err );
      })
    );
  }

  updateUser( user: UserModel ) {
    let url = URL_SERVICIOS + '/usuario/' + user._id;
    url += '?token=' + this.token;

    return this.http.put( url, user )
      .pipe(
        map(( resp: any ) => {

        if ( user._id === this.userModel?._id ) {
          const usuarioDB: UserModel = resp.usuario;
          this.storeStorage( usuarioDB._id ?? '', this.token, usuarioDB, this.menu );
        }

        this.toast.success(user.fullName, 'User Updated');
        return true;
      }),
        catchError( err => {
          this.toast.danger(err.error.errors.message, err.error.mensaje);
          return throwError(() => err );
        })
      );
  }

  changeImagen( archivo: File, id: string ) {
    this._upService.uploadFile( archivo, 'usuarios', id)
    .then( ( resp: any ) => {
      if (this.userModel) {
        this.userModel.img = resp.usuario.img;
      } else {
        this.userModel = new UserModel('', '', '');
        this.userModel.img = resp.usuario.img;
      }
      this.toast.success(this.userModel.fullName, 'Imagen Updated');

      this.storeStorage(id, this.token, this.userModel, this.menu);
    })
    .catch( resp => {
      console.log(resp);
    });
  }

  loadUser( desde: number = 0 ) {

    const url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get( url );
  }

  searchUsers( termino: string ) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get( url )
          .pipe(map( (resp: any) => resp.usuarios));
  }

  deletedUser( id: string ) {
    const url = URL_SERVICIOS + '/usuario/' + id + '?token=' + this.token;
    return this.http.delete( url )
        .pipe(
          map( resp => {
            this.toast.success('User deleted success', 'User deleted');
            return true;
          })
          );
  }
}
