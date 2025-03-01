import { Routes } from '@angular/router';
import { HomeComponent } from './RouteSample/home.component';
import { ContactComponent } from './RouteSample/contact.component';
import { DemoMyformComponent } from './demoForms/demo-myform.component';
import { NotfoundComponent } from './RouteSample/notfound.component';
import { ServiceComponent } from './RouteSample/service.component';
import { CoursesComponent } from './RouteSample/courses.component';
import { CoursedetailsComponent } from './RouteSample/coursedetails.component';
import { ConsumerserviceComponent } from './servicedemo/consumerservice.component';
import { HttpcompComponent } from './HttpDemo/httpcomp.component';
import { CreatepostComponent } from './HttpDemo/createpost.component';

export const routes: Routes = [
    // {path:"",component:HomeComponent},
    // {path:"contact",component:ContactComponent},
    // {path:"tempForm",component:DemoMyformComponent},
    // {path:"service",component:ServiceComponent},
    // {path:"courses",component:CoursesComponent,
    //     children:[{path:"details/:code",component:CoursedetailsComponent}]},
    // {path:"testserv",component:ConsumerserviceComponent},
        
    // {path:"**",component:NotfoundComponent}
    {path:"",component:HttpcompComponent},
    {path:"createPost",component:CreatepostComponent}
];
