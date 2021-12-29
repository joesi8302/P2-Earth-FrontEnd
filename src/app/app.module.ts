import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FeedComponent } from './pages/feed/feed.component';
import { AccountComponent } from './pages/account/account.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { MyInfoComponent } from './components/my-info/my-info.component';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { PostListComponent } from './components/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    AccountComponent,
    RegisterComponent,
    NewPostComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    PostsComponent,
    MyInfoComponent,
    PublicInfoComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
