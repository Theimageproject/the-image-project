import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detailedview',
  standalone: true,
  imports: [],
  templateUrl: './detailedview.component.html',
  styleUrl: './detailedview.component.css'
})
export class DetailedviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    console.log('Received data in DetailedviewComponent:', data);
  }

}
