import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CategoryItem {
  name: string;
  link: string;
  icon?: string;
}

interface CategorySection {
  title: string;
  items: CategoryItem[];
}

interface CategoryContent {
  title: string;
  sections: CategorySection[];
}

interface CategoryMap {
  [key: string]: CategoryContent;
}

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  contactNumber: string = "+971 562162730";
  salebutton: string = "Deals";
  storelink: string = "Store Locator";
  currencies: any;
  selectedcurrency: any = "AED";
  currencyrate: any = 1;
  currencyimage: any = 'UAE98.jpg';
  navItems: any[] = [
    {
      name: 'Best Sellers ',
      link: '/'
    },
    {
      name: 'Selling Fast',
      link: '/'
    },
    {
      name: 'Top Rated',
      link: '/'
    },
    {
      name: 'Newly launched',
      link: '/'
    },
    {
      name: 'Best Deals',
      link: '/'
    },
    {
      name: 'Recommended',
      link: '/'
    },

  ]
  brandsData = [
    {
      link: '',
      image: '../../../assets/images/brands/brands (1).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (2).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (3).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (4).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (5).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (6).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (7).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (8).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (9).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (10).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (11).jpg'
    },

    {
      link: '',
      image: '../../../assets/images/brands/brands (9).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (7).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (8).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (9).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (10).jpg'
    },
    {
      link: '',
      image: '../../../assets/images/brands/brands (11).jpg'
    },

    {
      link: '',
      image: '../../../assets/images/brands/brands (9).jpg'
    },

  ]
  isMegaMenuOpen: boolean = false;
  isMobileMenuOpen: boolean = false;

  selectedMainCategory: string = 'electronic';
  mobilemenu: any[] = [
    {
      name: 'Appliances',
      image: '../../../assets/images/header/1.png'
    },
    {
      name: 'Personal Care',
      image: '../../../assets/images/header/2.png'
    },
    {
      name: 'television',
      image: '../../../assets/images/header/1.png'
    },
    {
      name: 'it',
      image: '../../../assets/images/header/2.png'
    },
    {
      name: 'Appliances',
      image: '../../../assets/images/header/1.png'
    },
    {
      name: 'Personal Care',
      image: '../../../assets/images/header/2.png'
    },
    {
      name: 'Appliances',
      image: '../../../assets/images/header/1.png'
    },
    {
      name: 'television',
      image: '../../../assets/images/header/1.png'
    },
    {
      name: 'it',
      image: '../../../assets/images/header/2.png'
    }
  ];

  mainCategories = [
    {
      link: '',
      name: 'Electronic',
      id: 'electronic'
    },
    {
      link: '',
      name: 'Personal Care',
      id: 'personal-care'
    },
    {
      link: '',
      name: 'Television',
      id: 'television'
    },
    {
      link: '',
      name: 'IT',
      id: 'it'
    },
    {
      link: '',
      name: 'Audio & Video',
      id: 'audio-video'
    },
    {
      link: '',
      name: 'Kitchen Accessories',
      id: 'kitchen'
    },
    {
      link: '',
      name: 'Digital Camera',
      id: 'camera'
    },
    {
      link: '',
      name: 'Gaming',
      id: 'gaming'
    },
    {
      link: '',
      name: 'Mobile & Tablet',
      id: 'mobile-tablet'
    }
  ];

  categoryContent: CategoryMap = {
    'electronic': {
      title: 'Electronic',
      sections: [
        {
          title: 'Mobile & Accessories',
          items: [
            { name: 'Galaxy AI', link: '/', icon: '../../../assets/icons/mobile.svg' },
            { name: 'iPhones', link: '/' },
            { name: 'Premium Androids', link: '/' },
            { name: 'Earphones', link: '/' },
            { name: 'Headphones', link: '/' },
            { name: 'Tablets', link: '/' }
          ]
        },
        {
          title: 'Laptop & Accessories',
          items: [
            { name: 'Headsets & Speakers', link: '/' },
            { name: 'Wearables', link: '/' },
            { name: 'Chargers', link: '/' },
            { name: 'Headphones', link: '/' },
            { name: 'Earphones', link: '/' },
            { name: 'Bluetooth', link: '/' },
          ]
        },
        {
          title: 'Laptop & Accessories',
          items: [
            { name: 'Headsets & Speakers', link: '/' },
            { name: 'Wearables', link: '/' },
            { name: 'Chargers', link: '/' },
            { name: 'Headphones', link: '/' },
            { name: 'Earphones', link: '/' },
            { name: 'Bluetooth', link: '/' },
          ]
        },
        {
          title: 'Laptop & Accessories',
          items: [
            { name: 'Headsets & Speakers', link: '/' },
            { name: 'Wearables', link: '/' },
            { name: 'Chargers', link: '/' },
            { name: 'Headphones', link: '/' },
            { name: 'Earphones', link: '/' },
            { name: 'Bluetooth', link: '/' },
          ]
        },
      ]
    },
    // Add similar objects for other main categories
  };

  selectMainCategory(categoryId: string) {
    this.selectedMainCategory = categoryId;
  }

  toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
    if (this.isMegaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const allCatButton = target.closest('.all-cat button');
    const megaMenu = target.closest('.mega-menu');

    if (!allCatButton && !megaMenu && this.isMegaMenuOpen) {
      this.toggleMegaMenu();
    }
  }
}
