import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { RegisterComponent } from './register/register.component';
import { RootSidebarComponent } from './root-sidebar/root-sidebar.component';
import { RootUserComponent } from './root-user/root-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:LoginAdminComponent},
  {path:'rootuser',
  canActivate:[AuthGuard],
  component:RootUserComponent, children:
            [
              {path:'createcategory',canActivate:[AuthGuard],component:CreateCategoryComponent},
              {path:'adminprofile',component:AdminProfileComponent},
              {path:'categories',component:CategoriesComponent},
              {path:'editcategory', component:EditCategoryComponent},
              {path:'userlist', component:UsersListComponent}
            ]
          },
  {path:'rootusersidebar',component:RootSidebarComponent , children:
          [
            {path:'createcategory',component:CreateCategoryComponent},
            {path:'adminprofile',component:AdminProfileComponent},
            {path:'categories',component:CategoriesComponent},
            {path:'editcategory', component:EditCategoryComponent},
            {path:'userlist', component:UsersListComponent}
          ]
        },
  {path:'blogpage', component:BlogPageComponent},
  // {path:'userlist',component:UserListComponent},
  {path:'myblogs',component:MyBlogsComponent},
  {path:'allblogs',component:AllBlogsComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'createblog',component:CreatePostComponent},
  {path:'editpost',component:EditPostComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
