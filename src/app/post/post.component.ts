import { Component } from '@angular/core';

@Component({
    'selector':'app-post',
    'templateUrl':"./post.component.html",
    'styleUrls':["./post.component.css"]
})
export class PostComponent{
   postText : string = " "
    postTitle: string = " "

    isDisplay : boolean = false;

    constructor()
    {
     //setTimeout(()==>{}
     // this.isDisplay=false
      //  },2000)
    }

       getPostText(){
       this.postText = "Post Here";
      return this.postText;
    }

     clearTitle(){

         this.isDisplay=false;
        
         this.postTitle = ""
         
     }

     disableButton(event : Event){
        this.postTitle = (<HTMLInputElement>event.target).value
    
     }
}