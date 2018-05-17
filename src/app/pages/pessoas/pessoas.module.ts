import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';

@NgModule({
  imports: [
    CommonModule,
    PessoasComponent
  ],
  declarations: [PessoasComponent]
})
export class PessoasModule { }
