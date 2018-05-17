import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'; // Precisa do Angular router para o Nebular funcionar
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbMenuModule,
  NbMenuService
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
  ],
  declarations: [],
  providers: [
    NbSidebarService, //para a navbar do Nebular funcionar
    NbMenuService
  ],
  exports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class NebularModule { }
