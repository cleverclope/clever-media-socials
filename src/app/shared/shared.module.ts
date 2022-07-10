import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

const sharedModules =[
  MaterialModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...sharedModules
  ],
  
  exports:[
    ...sharedModules
  ]
})
export class SharedModule { }
