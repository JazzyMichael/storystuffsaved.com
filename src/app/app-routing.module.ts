import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'stuff', pathMatch: 'full' },
  { path: 'story', loadChildren: () => import('./story/story.module').then(m => m.StoryModule) },
  { path: 'stuff', loadChildren: () => import('./stuff/stuff.module').then(m => m.StuffModule) },
  { path: 'saved', loadChildren: () => import('./saved/saved.module').then(m => m.SavedModule) },
  { path: '**', redirectTo: 'stuff', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
