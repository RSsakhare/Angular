import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-httpcomp',
  imports: [CommonModule,FormsModule],
  templateUrl: './httpcomp.component.html',
  styleUrl: './httpcomp.component.css'
})
export class HttpcompComponent {
posts:any[]=[];
editPost: any = null;
constructor(private apiseserv:ApiserviceService){}
ngOnInit(){
  this.loaddata();
}
loaddata(){
    this.apiseserv.getPost().subscribe((data:any[])=>{this.posts=data;});
}

deletePost(id:number){
  this.apiseserv.delete(id).subscribe(res=>{
    this.posts=this.posts.filter(item=>item.id!==id);
    console.log("Post deleted successfully");
  })
}
edit(post: any) {
  this.editPost = { ...post };  // Clone the post to avoid modifying the original directly
}
update() {
  if (this.editPost) {
    this.apiseserv.updatePost(this.editPost.id, this.editPost).subscribe(res => {
      const index = this.posts.findIndex(post => post.id === this.editPost.id);
      this.posts[index] = { ...this.editPost };
      this.editPost = null;
      console.log("Post updated successfully");
    });
  }
}
}
