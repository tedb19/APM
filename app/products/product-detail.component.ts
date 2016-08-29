import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    id: number;
    errorMessage: any;
    
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _productService: ProductService){
        /* The + is ashorthand for converting from 
        *  string to numeric id
        */
        this.id = +this._routeParams.get('id');
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }

    ngOnInit(): void {
        this._productService.getProduct(this.id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any> error
        )
    }
} 