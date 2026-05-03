// src/app/components/top-nav/top-nav.component.ts
import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

interface NavLink {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit, OnDestroy {

  isScrolled = false;
  isMobileOpen = false;

  navLinks: NavLink[] = [
    { label: 'About', sectionId: 'about-brand' },
    { label: 'Founder', sectionId: 'founder' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Process', sectionId: 'process' },
    { label: 'Stories', sectionId: 'testimonials' },
    { label: 'Contact', sectionId: 'cta' },
  ];

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void { }
  ngOnDestroy(): void { }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Close mobile menu when clicking outside
    const target = event.target as HTMLElement;
    if (this.isMobileOpen && !target.closest('.navbar') && !target.closest('.mobile-menu')) {
      this.isMobileOpen = false;
    }
  }

  navigate(sectionId: string): void {
    this.isMobileOpen = false;
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isMobileOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }
}
