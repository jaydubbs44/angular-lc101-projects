import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'z', 'x'];

   targetImage = 'https://cdn-icons-png.flaticon.com/512/702/702980.png';

   constructor() { }

   ngOnInit() {
   }

}
