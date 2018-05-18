import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatTreeModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatTreeModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
