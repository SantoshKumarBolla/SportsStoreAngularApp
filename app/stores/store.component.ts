import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductRepository } from "../models/product.respository";

@Component(
    {
        selector: "stores",
        moduleId: module.id,
        templateUrl: "store.component.html"
    }
)

export class StoreComponent{
    public selectedCategory = null;

    constructor(private repository: ProductRepository){

    }

    get products(): Product[] {
        return this.repository.getProducts();
    }

    get categories(): string[] { return this.repository.getCategories(); }
}