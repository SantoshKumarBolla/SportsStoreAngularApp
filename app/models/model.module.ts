import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.respository";
import { StaticDatasource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDatasource]
})

export class ModelModule{}