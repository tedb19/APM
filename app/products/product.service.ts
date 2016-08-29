import { Injectable, Inject } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

Injectable()
export class ProductService {

    private _productUrl = 'api/products/products.json';

    constructor(@Inject(Http) private _http: Http){}

    getProducts(): Observable<IProduct[]> {
        return  this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products)
           // .filter((product: IProduct) => product.productId === id));
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}