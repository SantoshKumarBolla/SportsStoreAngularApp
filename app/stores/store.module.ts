import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../models/model.module";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartsummary.component";

@NgModule({
    imports: [BrowserModule, ModelModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
    exports: [StoreComponent]
})

export class StoreModule{}
