import { Component } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ActivationEnd, Data, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  titulo: string = '';

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute()
    .subscribe({
      next: (routeConfig) => {
        console.log(`routeConfig: ${routeConfig?.path}`);
        this.titulo = routeConfig?.path ?? '';
        this.title.setTitle( this.titulo );

        const metaTag: MetaDefinition = {
          name: 'description',
          content: this.titulo
        };

        this.meta.updateTag( metaTag )
      }
    })
  };

  getDataRoute(): Observable<Route | null> {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      
      filter((evento: ActivationEnd) => {
        return evento.snapshot.firstChild === null
      }),
      map((evento: ActivationEnd) => evento.snapshot.routeConfig)
    )
  }
}
