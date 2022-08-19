import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RootUserComponent } from './root-user/root-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootSidebarComponent } from './root-sidebar/root-sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CreatePostComponent } from './create-post/create-post.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RootUserComponent,
    LoginAdminComponent,
    HeaderComponent,
    HomeComponent,
    UsersListComponent,
    AdminsListComponent,
    RootSidebarComponent,
    UserListComponent,
    CreatePostComponent,
    MyBlogsComponent,
    BlogPageComponent,
    AllBlogsComponent,
    UserProfileComponent,
    EditPostComponent,
    CreateCategoryComponent,
    AdminProfileComponent,
    CategoriesComponent,
    EditCategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    FontAwesomeModule
  ],
  
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
