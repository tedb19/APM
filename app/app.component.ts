import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import 'rxjs/Rx';

import {ProductListComponent} from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid"><a class="navbar-brand">{{ pageTitle }}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Welcome']" >Home</a></li>
                        <li><a [routerLink]="['Products']">Product List</a></li>
                    </ul> 
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/products', name: 'Products', component: ProductListComponent},
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent}
])
export class AppComponent {
    pageTitle: string = "Acme Product Management";
}  