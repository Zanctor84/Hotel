import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RoomPageComponent} from './room-page/room-page.component';
import {AboutComponent} from './about/about.component';
import {RoomsComponent} from './rooms/rooms.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {ReserveComponent} from './reserve/reserve.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'rooms', component: RoomsComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'reserve', component: ReserveComponent},
      {path: 'room/:id', component: RoomPageComponent}
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
