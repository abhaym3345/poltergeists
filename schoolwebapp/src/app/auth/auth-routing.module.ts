import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthComponent } from './auth.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';


const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'teacher-login', component: TeacherLoginComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'student-login', component: StudentLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
