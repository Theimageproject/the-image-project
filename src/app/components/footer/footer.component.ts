// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

interface FooterLink {
  label:     string;
  sectionId: string;
}

@Component({
  selector:    'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:   ['./footer.component.css'],
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  footerLinks: FooterLink[] = [
    { label: 'About',    sectionId: 'about-brand'  },
    { label: 'Founder',  sectionId: 'founder'      },
    { label: 'Services', sectionId: 'services'     },
    { label: 'Process',  sectionId: 'process'      },
    { label: 'Stories',  sectionId: 'testimonials' },
    { label: 'Contact',  sectionId: 'cta'          },
  ];

  constructor(private scrollService: ScrollService) {}

  navigate(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
}
