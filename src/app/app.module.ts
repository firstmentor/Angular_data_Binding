import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { NgstylengclassComponent } from './ngstylengclass/ngstylengclass.component';


@NgModule({
  declarations: [
    AppComponent,
    AttributebindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    TemplateReferenceVariableComponent,
    NgstylengclassComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule       //two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
