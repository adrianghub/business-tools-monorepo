import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Route,
  TitleStrategy,
  type ActivatedRouteSnapshot,
  type ResolveFn,
  type RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Expenses App - ${title}`);
    }
  }
}

export const titleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
) => route.routeConfig?.path?.replace('-', ' ') ?? '';

export const appRoutes: Route[] = [
  {
    path: 'expenses-overview',
    loadComponent: () =>
      import('./pages/expenses-overview-page/expenses-overview-page.component'),
    title: titleResolver,
  },
  {
    path: 'expenses-approval',
    loadComponent: () =>
      import('./pages/expenses-approval-page/expenses-approval-page.component'),
    title: titleResolver,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/expenses-overview',
  },
];
