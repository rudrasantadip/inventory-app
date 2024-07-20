import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Word } from 'd3-cloud';
import { ProductDto } from 'src/app/dto/ProductDto';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  //product form
    productForm:FormGroup;
  //product names array
  productNames:string[]=[];
  productName:string=''
  product:ProductDto={
    productName: '',
    categoryPrimary: '',
    categorySecondary: '',
    price: 0,
    quantity: 0,
    productType: ''
  }
   

  //CONSTRUCTOR
  constructor(private productService:ProductserviceService)
  {
   this.productForm = this.createProductForm();
  }

  //ONINIT METHOD
  ngOnInit(): void {
   this.productService.getProductNames().subscribe(
    (names)=>{
      this.productNames=names;
      this.productForm.get('productName')?.valueChanges.subscribe(value => {
        this.productService.getProductByName(value).subscribe(
          (respProduct:ProductDto)=>{
            this.productForm.get('categoryPrimary')?.setValue(respProduct.categoryPrimary);
            this.productForm.get('categorySecondary')?.setValue(respProduct.categorySecondary);
            this.productForm.get('productType')?.setValue(respProduct.productType);
            console.log(respProduct);
          }
        )
      });
    }
   );
  }




  //submit form data
  onSubmit() {
    if (this.productForm.valid) {
      let productDto:ProductDto={
        productName: '',
        categoryPrimary: '',
        categorySecondary: '',
        price: 0,
        quantity: 0,
        productType: '',
        unit:'Kg'
      };
      Object.assign(productDto,this.productForm.value)
      // console.log(productDto);

      this.productService.addProduct(productDto).subscribe(
        (response)=>{
          if(response)
          {
            alert('Product has been added successfully');
            this.closePopup();
          }
          else{
            alert('Some error occured');
          }
        }
      )
    } else {
      console.log('Form is invalid');
    }
  }


  //show pop up for adding popup
  showpopUp: boolean = false;
  closePopup() {
    this.showpopUp = false;
  }

  removeProduct() {
    this.closePopup();
  }

  addProduct() {
    this.showpopUp = true;
  }

  //word cloud
  onWorkClick($event: { event: MouseEvent; word: Word }) {
    alert($event.word.text);
  }
  data = [
    'Hello',
    'world',
    'normally',
    'you',
    'want',
    'more',
    'words',
    'than',
    'this',
  ].map(function (d) {
    return { text: d, value: 10 + Math.random() * 90 };
  });



  //CREATE PRODUCT FORM
  createProductForm(): FormGroup {
    const product: ProductDto = {
      productName: '',
      categoryPrimary: '',
      categorySecondary: '',
      price: 0,
      quantity: 0,
      unit:'Kg',
      productType: ''
    };

    return new FormGroup({
      productName: new FormControl(product.productName, Validators.required),
      categoryPrimary: new FormControl(product.categoryPrimary, Validators.required),
      categorySecondary: new FormControl(product.categorySecondary, Validators.required),
      price: new FormControl(product.price, [Validators.required, Validators.pattern("^[0-9]*$"),this.notZeroValidator()]),
      quantity: new FormControl(product.quantity, [Validators.required, Validators.pattern("^[0-9]*$"),this.notZeroValidator()]),
      productType: new FormControl(product.productType, Validators.required)
    });
  }

  //CUSTOM VALIDATORS
  notZeroValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === 0 ? { notZero: { value: control.value } } : null;
    };
  }
}
