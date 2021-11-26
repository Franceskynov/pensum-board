import {Component, HostBinding} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class') className = '';
  public isDark: boolean;
  public toggleControl = new FormControl(false);
  constructor(
    private overlay: OverlayContainer
  ) {
    this.isDark = false;
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
        this.isDark = true;
      } else {
        this.isDark = false;
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }
}
