import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductRepository } from "../models/product.respository";
import { Cart } from "../models/cart.model";
import { Router } from "@angular/router";

@Component(
    {
        selector: "stores",
        moduleId: module.id,
        templateUrl: "store.component.html"
    }
)

export class StoreComponent{
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository, private cart: Cart){}
    // constructor(private repository: ProductRepository, private cart: Cart, private router: Router){}

    get products(): Product[] {
        let pageIndex = (this.selectedPage -1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).splice(pageIndex, this.productsPerPage);

        // return this.repository.getProducts(this.selectedCategory).splice(pageIndex, pageIndex + this.productsPerPage);
        //return this.repository.getProducts();
    }

    get categories(): string[] { return this.repository.getCategories(); }

    changeCategory(newCategory? : string) { this.selectedCategory = newCategory; }

    changePage(newPage: number) { this.selectedPage = newPage; }

    changePageSize(newSize: number){
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
        //this.router.navigateByUrl("/cart");
    }
}