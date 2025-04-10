import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductbreadcrumbComponent } from '../../shared/productbreadcrumb/productbreadcrumb.component';
import { CategoryComponent } from "../../shared/category/category.component";
import { ProductcaroComponent } from '../../shared/productcaro/productcaro.component';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ApiService } from '../../services/api.service';
import { HeadingComponent } from "../../shared/heading/heading.component";
import { IMAGE_PATHS } from '../../shared/constants/api-paths';
import { CartService } from '../../services/cartservices';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  imagePath = IMAGE_PATHS;
  productId!: string;
  productPage: any;
  categoryData: any[] = [];
  productDetails: any[] = [];
  productCarousel: any[] = [];
  selectedCurrency: string = 'AED';
  deliveryMessage: any[] = [];
  productcart: any[] = [];
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




      deliveryMessage: [
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

  ratingBreakdown: RatingBreakdown[] = [];

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
  constructor(private route: ActivatedRoute, private api: ApiService, private cartService: CartService, private snackBar: MatSnackBar) { }

  openCart() {
    this.cartService.showCart();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.api.getProductDetails(this.productId).subscribe((res) => {
        this.productPage = res?.productPage || {};
        this.categoryData = this.productPage[0].categoryData;
        this.product = this.productPage.product;
        this.productCarousel = this.productPage[0].productcarousel;
        this.productDetails = this.productPage[0].productDetails;
        this.technicalDetails = this.productPage[0].technicalDetails;
        this.currentImage = this.productPage[0]?.productimages[0]?.image1;
      });
      this.deliveryMessage = this.product[0].deliveryMessage;
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
  addToCart() {
    const product = {
      id: this.productDetails[0]?.productid,
      brand: this.productDetails[0]?.brand,
      name: this.productDetails[0]?.productName,
      image: this.productDetails[0]?.productimages[0]?.image1,
      price: this.productDetails[0]?.price,
      sprice: this.productDetails[0]?.sprice,
      quantity: 1,
      rating: this.productDetails[0]?.rating,
      sale: this.productDetails[0]?.sale,
      expressDelivery: this.productDetails[0]?.expressDelivery,
      standardDelivery: this.productDetails[0]?.standardDelivery
    };
    
    this.cartService.addToCart(product);
    this.cartService.showCart();
  }
  toggleWishlist(product: any): void {
    this.api.addToWishlist(product.id).subscribe((data) => {
      console.log(data);
      this.snackBar.open('Product added to wishlist', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-container'],
      });
    });
  }
}
