import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'trending', component: TrendingComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
