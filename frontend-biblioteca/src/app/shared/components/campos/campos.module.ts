import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    InputTextComponent, 
    InputNumberComponent, 
    InputTextareaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputTextComponent, 
    InputNumberComponent, 
    InputTextareaComponent
  ]
})
export class CamposModule { }
