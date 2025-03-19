import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactnumber: string = '+971 4 353 44 00';
  email: string = 'estore@sevenwonder.ae';

  socialIcons: any[] = [
    {
      icon: '../../../assets/icons/TelegramLogo.svg',
      link: 'https://www.telegram.org'
    },
    {
      icon: '../../../assets/icons/FacebookLogo.svg',
      link: 'https://www.facebook.com'
    },
    {
      icon: '../../../assets/icons/XLogo.svg',
      link: 'https://www.twitter.com'
    },
    {
      icon: '../../../assets/icons/InstagramLogo.svg',
      link: 'https://www.instagram.com'
    },
  ];
  cardIcons: any[] = [
    {
      icon: '../../../assets/icons/cards/2.png',
    },
    {
      icon: '../../../assets/icons/cards/1.png',
    },
    {
      icon: '../../../assets/icons/cards/3.png',
    },
    {
      icon: '../../../assets/icons/cards/4.png',
    },
    {
      icon: '../../../assets/icons/cards/5.png',
    },
  ]
  footerQuickLinks: any[] = [
    {
      heading: 'Quick Links',
      links: [
        { link: '#', text: 'About Us', target: false },
        { link: '#', text: 'Contact Us', target: false },
        { link: '#', text: 'Exchange & Returns', target: false },
        { link: '#', text: 'Track Your Order', target: false },
        { link: '#', text: 'Privacy Policy', target: false },
        { link: '#', text: 'Bulk Inquiry', target: false },
        { link: '#', text: 'Delivery & Installation', target: false },
      ]
    },
    {
      heading: 'Shop by Category',
      links: [
        { link: '#', text: 'Television', target: false },
        { link: '#', text: 'IT', target: false },
        { link: '#', text: 'Digital Camera', target: false },
        { link: '#', text: 'Audio & Video', target: false },
        { link: '#', text: 'Gaming', target: false },
        { link: '#', text: 'Mobile & Tablet', target: false },
        { link: '#', text: 'Personal Care', target: false },
        { link: '#', text: 'Kitchen Appliances', target: false },
      ]
    },
    {
      heading: 'Shop by Brands',
      links: [
        { link: '#', text: 'Aftron', target: false },
        { link: '#', text: 'Ariete', target: false },
        { link: '#', text: 'Midea', target: false },
        { link: '#', text: 'Asus', target: false },
        { link: '#', text: 'Prestige', target: false },
        { link: '#', text: 'Anker', target: false },
        { link: '#', text: 'Wolf Power', target: false },
        { link: '#', text: 'Amazon', target: false },
      ]
    },
    {
      heading: 'Top Global Search',
      links: [
        { link: '#', text: 'Apple iPhone 13 Pro Max', target: false },
        { link: '#', text: 'Samsung S21', target: false },
      ]
    }
  ];

}
