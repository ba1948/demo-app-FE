import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'messages-log', loadChildren: () => import('./components/messages-log/messages-log.module').then(m => m.MessagesLogModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
