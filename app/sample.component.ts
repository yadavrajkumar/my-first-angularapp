import {Component} from '@angular/core';
@Component({
   selector : 'sample',
   template : `
           		<div class="container" *ngIf="showHeader">
           			<h1> This is my Sample page</h1>
					<br>
		           He is {{name | uppercase}}<br>
		           <img bind-src="imageUrl"/>
		           <br>
		            <br>
                     <br>
		           Keyup<input type="text" [(ngModel)]="realName" (keyup.enter)="getValues($event)"/>
		                
		                {{realName}}
		                <br>
		                <br>
		                <ul *ngFor = "let item of items"> 
		                <li>{{item}}</li> 
		                </ul>	
		                <br>
		                Display Price : {{price | currency : 'INR' :'true'}}		
           		</div>
	           
	           
           

               `
           
          

})

export class SampleComponent{

	private name : string;
	private imageUrl : string;
    private realName : string;
    private showHeader : boolean;
    private items : string[];
    private price : number;

	constructor(){

		this.name="Scott Desatnic";
		this.imageUrl = "http://lorempixel.com/400/200";
		this.realName="Rajkumar";
		this.showHeader =true;
		this.items=["hi","hello","hru","wru"]
		this.price = 1500;
	}

	getValues(uma : any){

		console.log(uma.target.value)
	}
	
	/*getValues2(raj : any){

		console.log(raj.target.value)
	}
*/

	
}