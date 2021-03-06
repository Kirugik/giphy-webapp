import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { TrendingComponent } from './components/trending/trending.component';
// import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'trending', component: TrendingComponent}, 
  { path: 'search', component: SearchComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
