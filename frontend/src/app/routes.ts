import{Routes} from '@angular/router'
import {AdminComponent} from './admin/admin.component'
import{RegistrationComponent} from "./admin/registration/registration.component"
import{LoginComponent} from './admin/login/login.component'
import { HomeComponent } from './home/home.component'

export const appRoutes:Routes =[
    {
        path:'signup',
        component:AdminComponent,
        children:[{path:'',component:RegistrationComponent}]
    },
    {
        path:'login',
        component:AdminComponent,
        children:[{path:'',component:LoginComponent}]
    },
{
    path:'home',
    component:HomeComponent
}]