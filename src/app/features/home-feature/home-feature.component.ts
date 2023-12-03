import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@shared';

@Component({
  selector: 'app-home-feature',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFeatureComponent {}
