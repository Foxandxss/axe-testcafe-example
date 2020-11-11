import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-drop-down',
  templateUrl: './dark-mode-drop-down.component.html',
  styleUrls: ['./dark-mode-drop-down.component.css']
})
export class DarkModeDropDownComponent implements OnInit {
  storageKey = 'color-scheme';

  ngOnInit() {
    const storedColorScheme = localStorage.getItem(this.storageKey);

    if (storedColorScheme) {
      document.body.dataset.colorScheme = storedColorScheme;
    }
  }

  switchColorTheme(e: Event): void {
    const target = e.target as Element;
    document.body.dataset.colorScheme = target.id;
    localStorage.setItem(this.storageKey, target.id);
  }

}
