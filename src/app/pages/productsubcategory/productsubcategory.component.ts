import { Component, OnInit,Input } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/BreadcrumbComponent';
import { CategoryComponent } from '../../shared/category/category.component';
import { ProductlistingComponent } from '../../shared/productlisting/productlisting.component';
import { HeadingComponent } from "../../shared/heading/heading.component";

@Component({
  selector: 'app-productsubcategory',
  imports: [BreadcrumbComponent,CategoryComponent,ProductlistingComponent,HeadingComponent],
  templateUrl: './productsubcategory.component.html',
  styleUrl: './productsubcategory.component.css'
})
export class ProductsubcategoryComponent {
  items = [

    { image: '../../../assets/images/banner/bannet2.jpg' },
    { image: '../../../assets/images/banner/bannet2.jpg' },
  ];
  categoryData = [
    {
      image: '../../../assets/images/category/5.jpg',
      title: 'Kitchen',
      link: ''
    },
    {
      image: '../../../assets/images/category/6.jpg',
      title: 'Digital Camera',
      link: ''
    },
    {
      image: '../../../assets/images/category/1.jpg',
      title: 'Television',
      link: ''
    },
    {
      image: '../../../assets/images/category/2.jpg',
      title: 'Smartphones',
      link: ''
    },
    {
      image: '../../../assets/images/category/4.jpg',
      title: 'Gaming',
      link: ''
    },
    {
      image: '../../../assets/images/category/3.jpg',
      title: 'Personal Care',
      link: ''
    },
    {
      image: '../../../assets/images/category/6.jpg',
      title: 'Digital Camera',
      link: ''
    },
    {
      image: '../../../assets/images/category/1.jpg',
      title: 'Television',
      link: ''
    },
    {
      image: '../../../assets/images/category/2.jpg',
      title: 'Smartphones',
      link: ''
    },
    {
      image: '../../../assets/images/category/4.jpg',
      title: 'Gaming',
      link: ''
    },
    {
      image: '../../../assets/images/category/3.jpg',
      title: 'Personal Care',
      link: ''
    },

  ];
  productdata = [
    {
      productlist: [
        {
          brand: 'sony',
          name: 'Sony Alpha Mirrorless Camera with 24.2MP Sensor',
          image: '../../../assets/images/products/product1.png',
          price: 60,
          rating: 4.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          quantity: 1,
          discount: 20
        },
        {
          brand: 'nikon',
          name: 'Nikon D3500 DSLR Camera with 18-55mm Lens',
          image: '../../../assets/images/products/product1.png',
          price: 850,
          rating: 3.2,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 0,
          discount: 20
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'nikon',
          name: 'Nikon D3500 DSLR Camera with 18-55mm Lens',
          image: '../../../assets/images/products/product1.png',
          price: 850,
          rating: 3.2,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 0,
          discount: 20
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'nikon',
          name: 'Nikon D3500 DSLR Camera with 18-55mm Lens',
          image: '../../../assets/images/products/product1.png',
          price: 850,
          rating: 3.2,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 0,
          discount: 20
        },
        {
          brand: 'fujifilm',
          name: 'Fujifilm X-T4 Mirrorless Camera Body',
          image: '../../../assets/images/products/product1.png',
          price: 260,
          rating: 5.0,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 0
        },
        {
          brand: 'panasonic',
          name: 'Panasonic Lumix G7 4K Mirrorless Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.1,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'olympus',
          name: 'Olympus OM-D E-M10 Mark III Camera',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.8,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          quantity: 1
        },
        {
          brand: 'canon',
          name: 'Canon EOS M50 Mirrorless Vlogging Camera Kit',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 4.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          discount: 20,
          quantity: 1
        }
      ],
      bannerImage: [
        { image: '../../../assets/images/banner/product.png' },
        { image: '../../../assets/images/banner/product.png' },
        { image: '../../../assets/images/banner/product.png' }
      ]


    }
  ];
}
