// src/app/components/content/content.component.ts
import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { DetailedviewComponent } from '../detailedview/detailedview.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

interface Service {
  num: string;
  name: string;
  desc: string;
  wide?: boolean;
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

  services: Service[] = [
    {
      num: '01',
      name: 'Korean Color Analysis',
      desc: 'Identify your ideal color palette through expert analysis ensuring every outfit, accessory, and makeup choice works in harmony with your natural features.',
    },
    {
      num: '02',
      name: 'Body Shape Assessment',
      desc: 'Understand your body shape and learn how to dress in a way that fits, flatters, and highlights your best features.',
    },
    {
      num: '03',
      name: 'Face Shape Evaluation',
      desc: 'Find the right hairstyles, accessories, and eyewear that best complement your natural facial structure. This session ensures every detail near your face enhances your overall look effortlessly.',
    },
    {
      num: '04',
      name: 'Power Dressing',
      desc: "Build a wardrobe that communicates confidence and credibility perfect for professional and public- facing roles.From meetings to media, you'll know exactly what to wear to leave the right impression.",
    },
    {
      num: '05',
      name: 'Presence & Image Edit',
      desc: "A Personal Brand Elevation Service A strategic refinement of your external image so it reflects confidence, clarity, and leadership—without feeling forced or inauthentic.",
    },
    {
      num: '06',
      name: 'Signature Style Discovery',
      desc: "A Personal Brand Elevation Service A strategic refinement of your external image so it reflects confidence, clarity, and leadership—without feeling forced or inauthentic",
    },
    {
      num: '07',
      name: 'Style Reset',
      desc: "A full image refresh for life transitions career changes, body changes, or simply the desire to reinvent your look.This service realigns your wardrobe and style to match the person you are today",
    },
    {
      num: '08',
      name: 'Personal Styling / Shopping for Events',
      desc: "Guided shopping experience tailored to your colors, fit, and lifestyle online or in-store. Whether it's a wardrobe update or a specific event, you’ll buy what works not just what’s trending",
    },
    {
      num: '09',
      name: 'The Wedding Edit',
      desc: "One-time styling for weddings, shoots, or special events, Outfits, accessories, and finishing touches included.",
    }
  ];

  steps: Step[] = [
    {
      num: '01',
      label: 'Step 01',
      name: 'The Clarity Call',
      desc: 'We start with a conversation. Your life, your goals, and what you hope to change.',
    },
    {
      num: '02',
      label: 'Step 02',
      name: 'The Plan',
      desc: 'No generic advice. No guesswork. A precise, personalised approach built entirely around who you are and where you’re going.',
    },
    {
      num: '03',
      label: 'Step 03',
      name: 'Transformation',
      desc: "This is where the magic happens. Whether it's a color analysis edit, a shopping session, or a full intensive - we move with clarity, purpose, and complete attention to you.",
    },
    {
      num: '04',
      label: 'Step 04',
      name: 'The Blue Print',
      desc: "We don’t leave you with a feeling. We leave you with a plan. Everything from your session documented, personalised, and yours to carry forward with complete clarity.",
    },
  ];

  testimonials: Testimonial[] = [
    {
      text: 'I didn\'t expect to feel emotional during a styling session. But the moment I put on an outfit that truly felt like me — I cried. Something shifted that day.',
      name: 'Ananya R.',
      detail: 'Wardrobe Edit & Consultation',
      featured: true,
    },
    {
      text: 'I\'ve worked with stylists before. None of them understood me the way this experience did. It felt less like shopping and more like therapy — in the best possible way.',
      name: 'Priya S.',
      detail: 'Personal Style Intensive',
      featured: false,
    },
    {
      text: 'People have started treating me differently. My manager noticed. My husband noticed. But most importantly — I noticed. That\'s everything.',
      name: 'Meera K.',
      detail: 'Image & Presence Intensive',
      featured: false,
    },
  ];

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
      `Hi there,

I came across The Image Project and I would love to book a Discovery Call.

Here are my details:

👤 Name: 
📱 Phone Number: 
📍 City / Location: 

🎯 Service I am Interested In : ${this.selectedservice || '(pick a service / Not sure yet — open to guidance)'}

💬 A little about what I am looking for:
(Share as much or as little as you like)


I look forward to hearing from you.

Warm regards,
[Your Name]`
    );
    const mailTo = `mailto:dr.meghanamuralidharan@gmail.com?subject=${this.mailSubject}&body=${mailBody}`;
    window.location.href = mailTo;  // ← this is the key, NOT window.open()
  }


  showMore(service: Service): void {
    const dialogREf = this.dialog.open(DetailedviewComponent, {
      data: service, height: '400px', width: '600px', panelClass: 'custom-dialog-container'
    });

    dialogREf.afterClosed().subscribe(result => {

    });
  }
}
