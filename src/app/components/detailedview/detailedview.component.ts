import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detailedview',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './detailedview.component.html',
  styleUrl: './detailedview.component.css'
})
export class DetailedviewComponent {
  data: any = undefined!;
  constructor(@Inject(MAT_DIALOG_DATA) public config: any, private dialogRef: MatDialogRef<DetailedviewComponent>) {
    this.data = config;
    console.log('Received data in DetailedviewComponent:', config);
  }

  close() {
    this.dialogRef.close();
  }
}
