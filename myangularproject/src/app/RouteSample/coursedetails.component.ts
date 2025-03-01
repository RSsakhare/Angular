import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  imports: [RouterModule],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css'
})
export class CoursedetailsComponent {
result="";
paramSub:any;
public selectedTr!:string;
//DI
constructor(private activatedRoute:ActivatedRoute){}
ngOnInit()
{
  this.paramSub=this.activatedRoute.params.subscribe(
    p=>{this.selectedTr=p['code'];
      if(this.selectedTr=='ang')
      {this.result="You select Angular SPA Framework Course"}
      if(this.selectedTr=="rjs")
      {this.result="You selected ReactJs Front and application Development"}
    });
}
ngOnDestroy(){
this.paramSub.unsubscribe();
}
}
