import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { PrivateDataComponent } from './private-data/private-data.component';
import { PublicDataComponent } from './public-data/public-data.component';

const routes: Routes = [
  {path: 'private-data', component: PrivateDataComponent, canActivate: [AuthGuardGuard]},
  {path: '**', component: PublicDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
