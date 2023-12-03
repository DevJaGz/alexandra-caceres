import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfileImageComponent],
  exports: [ProfileImageComponent],
})
export class SharedModule {}
