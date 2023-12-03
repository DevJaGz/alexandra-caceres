import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [],
  templateUrl: './profile-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {}
