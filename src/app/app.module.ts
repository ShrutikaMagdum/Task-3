import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from "./app.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
 
@NgModule({
    declarations:[
        AppComponent,
        AccordionComponent,
    ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AccordionModule
        
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}