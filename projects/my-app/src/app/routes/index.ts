import { Routes } from "@angular/router";

export const routes : Routes = [{
  path : 'people',
  loadChildren : () => import('../features/people/routes/index').then(item => item.peopleRoutes),
}]

