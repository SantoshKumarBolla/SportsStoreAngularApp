import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.respository";
import { StaticDatasource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({
    providers: [ProductRepository, StaticDatasource, Cart]
})

export class ModelModule{}