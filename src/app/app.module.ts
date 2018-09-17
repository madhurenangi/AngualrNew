import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Router} from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { UserDetailsComponent } from './user-details/user-details.component'
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import { AdduserComponent } from './adduser/adduser.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    UserDetailsComponent,
    FooterComponent,
    CommentsComponent,
    AdduserComponent,
    
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'users',component:UserDetailsComponent},
      {path:'comments',component:CommentsComponent},
      {path:'add',component:AdduserComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
