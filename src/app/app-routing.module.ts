import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { FormComponent } from './pages/form/form.component';
import { RandomComponent } from './pages/random/random.component';
import { PlatformComponent } from './pages/platform/platform.component';

const routes: Routes = [

  { path: '', component:ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: 'random', component: RandomComponent },
  { path: 'platform', component: PlatformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
