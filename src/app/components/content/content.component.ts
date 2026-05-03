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
      name: 'Personal Color Analysis',
      desc: 'Identify your ideal color palette through expert analysis ensuring every outfit, accessory, and makeup choice works in harmony with your natural features.',
    },
    {
      num: '02',
      name: 'Body Shape & Silhouete Styling',
      desc: 'Understand your body shape and learn how to dress in a way that fits, flatters, and highlights your best features.',
    },
    {
      num: '03',
      name: 'Face Shape Analysis',
      desc: 'Find the right hairstyles, accessories, and eyewear that best complement your natural facial structure. This session ensures every detail near your face enhances your overall look effortlessly.',
    },
    {
      num: '04',
      name: 'Power Dressing',
      desc: "Build a wardrobe that communicates confidence and credibility perfect for professional and public- facing roles.From meetings to media, you'll know exactly what to wear to leave the right impression.",
    },
    {
      num: '05',
      name: 'Signature Style Discovery',
      desc: "A Personal Brand Elevation Service A strategic refinement of your external image so it reflects confidence, clarity, and leadership—without feeling forced or inauthentic",
    },
    {
      num: '06',
      name: 'Presence & Image Edit',
      desc: "A Personal Brand Elevation Service A strategic refinement of your external image so it reflects confidence, clarity, and leadership—without feeling forced or inauthentic.",
    },
    {
      num: '07',
      name: 'Style Reset',
      desc: "A full image refresh for life transitions career changes, body changes, or simply the desire to reinvent your look.This service realigns your wardrobe and style to match the person you are today",
    },
    {
      num: '08',
      name: 'Personal Shopping',
      desc: "Guided shopping experience tailored to your colors, fit, and lifestyle online or in-store. Whether it's a wardrobe update or a specific event, you’ll buy what works not just what’s trending",
    },
    {
      num: '09',
      name: 'Personal Styling for an Event',
      desc: "One-time styling for weddings, shoots, or special events, Outfits, accessories, and finishing touches included.",
    },
    {
      num: '10',
      name: 'Bride & Groom Styling',
      desc: "Complete bridal styling with personalized guidance on colors, outfits, jewelry, and makeup tones that reflect your essence.We curate your wedding looks so they align with your personality, features, and cultural aesthetic.",
    }
  ];

  steps: Step[] = [
    {
      num: '01',
      label: 'Step 01',
      name: 'Discovery Call',
      desc: 'We begin with a conversation. No judgement, no agenda — just an open dialogue about your life, your goals, and what you\'re hoping to feel.',
    },
    {
      num: '02',
      label: 'Step 02',
      name: 'Style Assessment',
      desc: 'A detailed look at your lifestyle, body architecture, colour season, and the visual message you want to send to the world.',
    },
    {
      num: '03',
      label: 'Step 03',
      name: 'Transformation',
      desc: 'Whether it\'s a wardrobe edit, a shopping session, or a full intensive — we move with clarity, purpose, and complete attention to you.',
    },
    {
      num: '04',
      label: 'Step 04',
      name: 'Integration',
      desc: 'The work doesn\'t end when we\'re done. We ensure you feel confident, anchored, and equipped to carry this new version of yourself forward.',
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
