import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { CountryComponent } from './country/country.component';
import { ImagePipe } from '../pipes/image.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CountriesComponent } from './countries/countries.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GlobalComponent,
    CountryComponent,
    ImagePipe,
    ConnectComponent,
    SearchPipe,
    CountriesComponent,
    SkeletonComponent
  ],
  exports: [
    GlobalComponent,
    CountryComponent,
    ConnectComponent,
    ImagePipe,
    CountriesComponent,
    SearchPipe,
    SkeletonComponent
  ]
})
export class ComponentsModuleModule { }
