import  {Component} from '@angular/core';

import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {SampleComponent} from './sample.component';
@Component({

	selector : 'my-app',
	template : `<div *ngIf="showHeader">
					<h1>This is Angalar 2 application</h1>
					<my-home></my-home>
                     <my-about></my-about>
                     <sample></sample>
				
				</div>
				`
})



export class AppComponent{


private showHeader : boolean;
	constructor(){

		this.showHeader =true;
	}

}
