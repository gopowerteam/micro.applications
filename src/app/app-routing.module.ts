import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/app01/page1', pathMatch: 'full' },
  {
    path: 'app01',
    loadChildren: '../../projects/app01/src/app/app.module#AppModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'top',
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
