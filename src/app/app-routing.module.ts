import { ContentThirdComponent } from './components/content-third/content-third.component';
import { ContentSecondComponent } from './components/content-second/content-second.component';
import { ContentComponent } from './components/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'content-second', component:ContentSecondComponent},
  {path: 'content-third', component: ContentThirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
