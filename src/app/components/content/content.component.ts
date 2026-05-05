// src/app/components/content/content.component.ts
import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { DetailedviewComponent } from '../detailedview/detailedview.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { services } from '../../../assets/data/services';
import { steps } from '../../../assets/data/steps';
import { testimonials } from '../../../assets/data/testimonials';

interface Service {
  num: string;
  name: string;
  desc: string;
  wide?: boolean;
  image?: string;
  data?: any;
}

interface Step {
  num: string;
  label: string;
  name: string;
  desc: string;
}

interface Testimonial {
  text: string;
  name: string;
  detail: string;
  featured: boolean;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {

  selectedservice: string = undefined!;

  services: Service[] = services;

  steps: Step[] = steps

  testimonials: Testimonial[] = testimonials;

  // content.component.ts

  readonly mailSubject = encodeURIComponent(
    'Discovery Call Request — The Image Project'
  );

  constructor(private scrollService: ScrollService, private dialog: MatDialog) { }

  navigate(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  onImgError(event: Event): void {
    console.error('Image failed to load:', (event.target as HTMLImageElement).src);
  }


  openMail(): void {
    const mailBody = encodeURIComponent(
      `Hello,

I came across The Image Project and would love to explore your services further.

I’d like to schedule a Clarity Call and have shared my details below:

👤 Name:
📱 Phone Number:
📍 City / Location:

🎯 Area of Interest:
(Specific service or open to guidance)

💬 What I’m Looking For:
(Anything you’d like us to know—your goals, current challenges, or what you’d like to change)

Looking forward to connecting.

Warm regards,
[Your Name]
`
    );
    const mailTo = `mailto:consult@theimageproject.in?subject=${this.mailSubject}&body=${mailBody}`;
    window.location.href = mailTo;  // ← this is the key, NOT window.open()
  }


  showMore(service: Service): void {
    const dialogREf = this.dialog.open(DetailedviewComponent, {
      data: service, panelClass: 'custom-dialog-container'
    });

    dialogREf.afterClosed().subscribe(result => {

    });
  }
}
