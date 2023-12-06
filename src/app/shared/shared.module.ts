import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfileImageComponent, StarsComponent],
  exports: [ProfileImageComponent, StarsComponent],
})
export class SharedModule {}
