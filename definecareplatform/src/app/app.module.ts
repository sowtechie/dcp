import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppDataService } from './services/app-data.service';
import { FooterModule } from './footer/footer.module';
import {MatRadioModule} from '@angular/material/radio';
import { SearchModule } from './search/search.module';
import { PatientService } from './services/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { PolicyService } from './services/policy.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    HttpModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule, MatCheckboxModule,
    AppRoutingModule,
    MatRadioModule,
    FooterModule,
    SearchModule,

  ],
  providers: [AppDataService, PatientService, PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
