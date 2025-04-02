import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductbreadcrumbComponent } from '../../shared/productbreadcrumb/productbreadcrumb.component';
import { CategoryComponent } from "../../shared/category/category.component";
import { ProductcaroComponent } from '../../shared/productcaro/productcaro.component';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { title } from 'node:process';
import { text } from 'node:stream/consumers';
import { HeadingComponent } from "../../shared/heading/heading.component";

interface RatingBreakdown {
  stars: number;
  percentage: number;
}

interface ReviewImage {
  id: number;
  imageUrl: string;
}

interface CustomerReview {
  id: number;
  reviewerName: string;
  reviewDate: string;
  rating: number;
  title: string;
  content: string[];
  reviewerImage: string;
}

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule, ProductbreadcrumbComponent, CategoryComponent, ProductcaroComponent, CarouselModule, HeadingComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  productId!: string;
  categoryData: any[] = [];
  productDetails: any[] = [];
  productCarousel: any[] = [];
  selectedCurrency: string = 'AED';
  deliveryMessage: any[] = [];

  priceDetails: any[] = [
    {
      Image: '../../../assets/icons/products/Money.svg',
      title: 'Cash on Delivery',
    },
    {
      Image: '../../../assets/icons/products/BoxArrowDown.svg',
      title: 'Low Returns',
    },
    {
      Image: '../../../assets/icons/products/Star.svg',
      title: 'Top Rated',
    },

  ];
  product: any[] = [
    {

      categoryData: [
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

      ],
      productDetails: [
        {
          productimages: [
            {
              image1: '../../../assets/images/productsdetails/1.png',
              image2: '../../../assets/images/productsdetails/2.png',
              image3: '../../../assets/images/productsdetails/3.png',
              image4: '../../../assets/images/productsdetails/4.png'
            }
          ],
          brand: 'samsung',
          productName: 'Samsung galaxy S23 Ultra 12GB 256GB Cream - Middle east version',
          model: 'CKMSAM12564300',
          sprice: 15200,
          price: 17000,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          discount: 20,
          deliveredBy: 'Delivered by 1st Feb',
          rating: 3.5,
          ratingCount: 100,
          reviewsCount: 1202,
          banner: '../../../assets/images/productsdetails/productbanner.png',
          additionalInformation: [
            {
              text: "The samsung galaxy S24 is universally use the new snapdragon 8 gen 3 across the world",
            }, {

              text: "The galaxy S24 have AI-optimized main camera photos. Night mode is also better. Nightography zoom will bring brighter nighttime photos with the zoom cameras",
            }, {

              text: "The samsung galaxy S24 ultra comes with emergency texting via satellite support over the 3GPP standard",
            },


          ],
          color: [
            {
              color: 'red',
              image: '../../../assets/images/productsdetails/color-1.png'
            },
            {
              color: 'blue',
              image: '../../../assets/images/productsdetails/color-2.png'
            },
            {
              color: 'green',
              image: '../../../assets/images/productsdetails/color-3.png'
            },
            {
              color: 'yellow',
              image: '../../../assets/images/productsdetails/color-4.png'
            }
          ],
          storage: [
            {
              storage: '256GB',
            },
            {
              storage: '512GB',
            },


          ],
          ram: [
            {
              ram: '12GB',
            },
            {
              ram: '16GB',
            },


          ],
          frequentlyBought: [
            {
              image: '../../../assets/images/productsdetails/product.png',
              title: 'Samsung galaxy  ..',
              price: 49,
              rating: 3.5,
            },
            {
              image: '../../../assets/images/productsdetails/product.png',
              title: 'Samsung galaxy  ..',
              price: 49,
              rating: 3.5,
            },
            {
              image: '../../../assets/images/productsdetails/product.png',
              title: 'Samsung galaxy  ..',
              price: 49,
              rating: 3.5,
            }

          ],
          productMessage: 'Unboxing Mandatory',
          productsImages: [
            {
              Image: '../../../assets/images/productsdetails/productdetails1.png'
            },
            {
              Image: '../../../assets/images/productsdetails/productdetails2.png'
            },
            {
              Image: '../../../assets/images/productsdetails/productdetails3.png'
            },
            {
              Image: '../../../assets/images/productsdetails/productdetails4.png'
            },
            {
              Image: '../../../assets/images/productsdetails/productdetails5.png'
            },
            {
              Image: '../../../assets/images/productsdetails/productdetails6.png'
            }
          ],

        }
      ],
      technicalDetails: [
        {
          name: "Secondary Camera Resolution",
          value: "12 MP"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        },
        {
          name: "Version",
          value: "Middle East Version"
        },
        {
          name: "Model Number",
          value: "SM-S928BZTCMEA, SM-S928B/DS"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        },
        {
          name: "Version",
          value: "Middle East Version"
        },
        {
          name: "Model Number",
          value: "SM-S928BZTCMEA, SM-S928B/DS"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        },
        {
          name: "Version",
          value: "Middle East Version"
        },
        {
          name: "Model Number",
          value: "SM-S928BZTCMEA, SM-S928B/DS"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        },
        {
          name: "Version",
          value: "Middle East Version"
        },
        {
          name: "Model Number",
          value: "SM-S928BZTCMEA, SM-S928B/DS"
        },
        {
          name: "Charging Type",
          value: "C-Type"
        }
      ],
      productcarousel: [
        {
          id: 1,
          brand: 'CANON',
          name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.5,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          quantity: 0,
          sprice: 500,
        },
        {
          id: 2,
          brand: 'CANON',
          name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 1,
          sprice: 500,
        },
        {
          id: 3,
          brand: 'CANON',
          name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.5,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          quantity: 1,
          sprice: 500,
        },
        {
          id: 4,
          brand: 'CANON',
          name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: false,
          quantity: 1,
          sprice: 500,
        },
        {
          id: 5,
          brand: 'CANON',
          name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.5,
          sale: true,
          expressDelivery: true,
          standardDelivery: false,
          quantity: 1,
          sprice: 500,
        },
        {
          id: 6,
          brand: 'CANON',
          name: 'Hitachi Drum Vacuum Cleaner 2100 Watts, 18 Liters Tank Dust Capacity With 7.8M Extra',
          image: '../../../assets/images/products/product1.png',
          price: 560,
          rating: 3.5,
          sale: false,
          expressDelivery: false,
          standardDelivery: true,
          quantity: 1,
          sprice: 500,
        },
        // Add more products here

      ],
      deliveryMessage:[
        {
          title: 'Easy Returns & Exchange',
          desc: 'Get free returns on eligible items.',
          Image: '../../../assets/icons/products/Package.svg'
        },
        {
          title: 'Delivered by Seven Wonders',
          desc: 'Free shipping when you spend above AED 100. ',
          Image: '../../../assets/icons/products/Truck.svg'
        },
        {
          title: 'Contactless Delivery',
          desc: 'Your delivery will be left at your door, valid on prepaid orders only. ',
          Image: '../../../assets/icons/products/contactless.svg'
        }
      ]


    }
  ]
  currentImage: string = '';
  showAllImages: boolean = false;
  showTechnicalDetails: boolean = false;

  @ViewChild('owlCar') owlCar!: CarouselComponent;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
  };
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 3.1,
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },

  };
  technicalDetails: any[] = [];

  totalReviews: number = 20000;
  ratingBreakdown: RatingBreakdown[] = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 15 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 0 }
  ];

  reviewImages: ReviewImage[] = [
    { id: 1, imageUrl: '../../../assets/images/productsdetails/review-1.png' },
    { id: 2, imageUrl: '../../../assets/images/productsdetails/review-2.png' },
    { id: 3, imageUrl: '../../../assets/images/productsdetails/review-3.png' },
    { id: 4, imageUrl: '../../../assets/images/productsdetails/review-4.png' },
    { id: 5, imageUrl: '../../../assets/images/productsdetails/review-5.png' },
    { id: 6, imageUrl: '../../../assets/images/productsdetails/review-1.png' }
  ];

  customerReviews: CustomerReview[] = [
    {
      id: 1,
      reviewerName: 'Rukku Sumayya',
      reviewDate: '19th Jan',
      rating: 4.2,
      title: 'Great value for money',
      content: [
        'I recently purchased the Samsung Galaxy M05 for just under INR 6500, and I must say, I am very impressed! For the price, this phone is an absolute steal and offers incredible value for money.',
        'The large display is a real highlight, providing a great viewing experience for day-to-day tasks. Despite being a budget phone, it has a premium feel in hand, which is a pleasant surprise. The build quality is solid, and it doesn\'t feel cheap.'
      ],
      reviewerImage: '../../../assets/images/productsdetails/customer.png'
    },
    {
      id: 1,
      reviewerName: 'Rukku Sumayya',
      reviewDate: '19th Jan',
      rating: 4.2,
      title: 'Great value for money',
      content: [
        'I recently purchased the Samsung Galaxy M05 for just under INR 6500, and I must say, I am very impressed! For the price, this phone is an absolute steal and offers incredible value for money.',
        'The large display is a real highlight, providing a great viewing experience for day-to-day tasks. Despite being a budget phone, it has a premium feel in hand, which is a pleasant surprise. The build quality is solid, and it doesn\'t feel cheap.'
      ],
      reviewerImage: '../../../assets/images/productsdetails/customer.png'
    },
    // Add more reviews as needed
  ];
  otherproduct: any[] = [
    {
      logo: '../../../assets/images/productsdetails/samsung.png',
      image: '../../../assets/images/productsdetails/charger.png',
      title: 'Charge fast, Stay up to date',
      description: 'Samsung USB Type C Home Travel Adapter & Power bank',
      price: 38.9,
    }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.product = this.product;
      this.categoryData = this.product[0].categoryData;
      this.productDetails = this.product[0].productDetails;
      this.technicalDetails = this.product[0].technicalDetails;
      this.productCarousel = this.product[0].productcarousel;
      this.deliveryMessage = this.product[0].deliveryMessage;
      this.currentImage = this.productDetails[0]?.productimages[0]?.image1;
    });
  }

  changeCarouselSlide(index: number) {
    this.currentImage = this.productDetails[0]?.productimages[0]['image' + (index + 1)];
    this.owlCar.to(index.toString());
  }

  resetImage() {
    this.currentImage = this.productDetails[0]?.productimages[0]?.image1;
    this.owlCar.to('0');
  }

  toggleImages() {
    this.showAllImages = !this.showAllImages;
  }

  toggleTechnicalDetails() {
    this.showTechnicalDetails = !this.showTechnicalDetails;
  }

  writeReview() {
    // Implement write review functionality
    console.log('Write review clicked');
  }
}
