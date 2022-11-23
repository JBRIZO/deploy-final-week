import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full',children: [
    {
      path: 'home',
      loadChildren: () =>
        import('src/app/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'login',
      loadChildren: () =>
        import('src/app/auth/auth.module').then(m => m.AuthModule),
    },
    {
      path: 'favorites',
      loadChildren: () =>
        import('src/app/favorites/favorites.module').then(m => m.FavoritesModule),
    },
    {
      path: 'lists',
      loadChildren: () =>
        import('src/app/lists/lists.module').then(m => m.ListsModule),
    },
    {
      path: 'movies',
      loadChildren: () =>
        import('src/app/movie-details/movie-details.module').then(
          m => m.MovieDetailsModule
        ),
    },
    {
      path: 'search',
      loadChildren: () =>
        import('src/app/search/search.module').then(m => m.SearchModule),
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
