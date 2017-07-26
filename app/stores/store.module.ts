import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../models/model.module";

@NgModule({
    imports: [BrowserModule, ModelModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})

export class StoreModule{}
