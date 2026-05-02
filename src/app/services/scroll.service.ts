// src/app/services/scroll.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {

  /**
   * Smoothly scrolls to a section by its element ID.
   * Accounts for fixed navbar height.
   */
  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const navbarHeight = 80; // matches navbar height
    const elTop = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top:      elTop - navbarHeight,
      behavior: 'smooth',
    });
  }
}
