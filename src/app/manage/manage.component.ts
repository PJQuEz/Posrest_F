import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];
    shoppingBasket2: Array<Product> = [];
    

    constructor() {
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }

  ngOnInit() {
  }



    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }

    addToBasket($event: any) {
        let newProduct: Product = $event.dragData;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort((a: Product, b: Product) => {
            return a.name.localeCompare(b.name);
        });
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
        addToBasket2($event: any) {
        let newProduct: Product = $event.dragData;
        for (let indx in this.shoppingBasket2) {
            let product: Product = this.shoppingBasket2[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket2.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket2.sort((a: Product, b: Product) => {
            return a.name.localeCompare(b.name);
        });
    }

    totalCost2(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket2) {
            let product: Product = this.shoppingBasket2[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
}