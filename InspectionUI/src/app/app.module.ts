import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddUpdateInspectionComponent } from './inspection/add-update-inspection/add-update-inspection.component';
import { InspectionServiceService} from './inspection-service.service';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddUpdateInspectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InspectionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
