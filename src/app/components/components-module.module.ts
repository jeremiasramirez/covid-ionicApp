import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { CountryComponent } from './country/country.component';
import { ImagePipe } from '../pipes/image.pipe';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GlobalComponent,
    CountryComponent,
    ImagePipe,
    SearchPipe
  ],
  exports: [
    CountryComponent,
    GlobalComponent 
  ]
})
export class ComponentsModuleModule { }
