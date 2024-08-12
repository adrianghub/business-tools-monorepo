import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bt-libs-ui-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input({ transform: addHome, required: true }) navbarItems: NavbarItem[] = [];
}

function addHome(items: NavbarItem[]) {
  return [{ label: 'home', route: '/' }, ...items];
}

export interface NavbarItem {
  label: string;
  route: string;
}
