import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponent } from './democomp/first.component';
import { ProductdetailsComponent } from './democomp/productdetails/productdetails.component';
import { ItemdetailsComponent } from './democomp/itemdetails/itemdetails.component';
import { MainComponent } from './democomp/main/main.component';
import { ParentComponent } from './democomp/ParentchildEx/parent.component';
import { IfdemoComponent } from './directiveDemo/ifdemo.component';
import { FordemoComponent } from './directiveDemo/fordemo.component';
import { SwitchdemoComponent } from './directiveDemo/switchdemo.component';
import { TestpipeComponent } from './demoPipe/testpipe.component';
import { AttributeDemoComponentComponent } from './directiveDemo/attribute-demo-component.component';
import { CustomAttributeDirectiveDirective } from './directiveDemo/custom-attribute-directive.directive';
import { DemoDataBindingComponent } from './demoDataBinding/demo-data-binding.component';
import { DemoeventHComponent } from './demoEventHandling/demoevent-h.component';
import { EventDemoTwoComponent } from './demoEventHandling/event-demo-two.component';
import { DemoParentComponent } from './demoEventHandling/demo-parent.component';
import { DemoMyformComponent } from './demoForms/demo-myform.component';
import { DemoAsynchronizeFormComponent } from './demoForms/demo-asynchronize-form.component';
import { ReactiveFormComponent } from './demoForms/reactiveForms/reactive-form.component';
import { ReactiveFormValidationComponent } from './demoForms/reactiveForms/reactive-form-validation.component';
import { HttpcompComponent } from './HttpDemo/httpcomp.component';
import { ProductComponent } from './Product-Category/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,ProductdetailsComponent,ItemdetailsComponent,MainComponent,ParentComponent,
    IfdemoComponent,FordemoComponent,SwitchdemoComponent,TestpipeComponent,
    AttributeDemoComponentComponent,CustomAttributeDirectiveDirective,DemoDataBindingComponent,DemoeventHComponent,
    EventDemoTwoComponent,DemoParentComponent,DemoMyformComponent,DemoAsynchronizeFormComponent,
    ReactiveFormComponent,ReactiveFormValidationComponent,RouterLink,
    HttpcompComponent,ProductComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangularproject';
}
