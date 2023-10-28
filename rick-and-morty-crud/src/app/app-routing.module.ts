import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AddEditItemsComponent } from './components/add-edit-items/add-edit-items.component';

const routes: Routes = [
  { path: '', component: ListItemsComponent },
  { path: 'add', component: AddEditItemsComponent },
  { path: 'edit/:id', component: AddEditItemsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
