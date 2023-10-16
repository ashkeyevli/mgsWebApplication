import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './Pages/menu/menu.component';
import {DishComponent} from './Pages/dish/dish.component';
import {DishItemComponent} from './Pages/dish-item/dish-item.component';
import {AppRoutingModule} from './app-routing.module';
// import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthInterceptor} from './AuthInterceptor';
import {OrderComponent} from './Pages/order/order.component';
import {ProviderService} from './provider.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { DishCreateComponent } from './Pages/dish-create/dish-create.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DishEditComponent } from './Pages/dish-edit/dish-edit.component';
import { StartPageComponent } from './Pages/start-page/start-page.component';
import {MatIconModule} from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishComponent,
    DishItemComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    DishCreateComponent,
    DishEditComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomMaterialModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
