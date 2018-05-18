import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../shareds/@material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoasComponent } from './pessoas.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [PessoasComponent],
  exports: [
    PessoasComponent
  ]
})
export class PessoasModule { }
