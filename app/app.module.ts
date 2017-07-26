import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StoreModule } from "./stores/store.module";
import { StoreComponent } from "./stores/store.component";


@NgModule({
    imports: [BrowserModule, FormsModule, StoreModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}