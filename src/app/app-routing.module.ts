import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { DisplayOrdersComponent } from './components/display-orders/display-orders.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { SlideComponent } from './components/slide/slide.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', component: SlideComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'forget-password', component: ForgetPasswordComponent },
  {
    path: 'home', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: DisplayBooksComponent },
      { path: 'cart', component: CartComponent, canActivate: [AuthguardGuard] }
    ]
  },
  { path: 'quick-view', component: BookComponent },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthguardGuard] },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthguardGuard] },
  { path: 'my-orders', component: DisplayOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
