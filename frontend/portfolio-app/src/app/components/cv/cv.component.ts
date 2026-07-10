import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  activeTab: 'software' | 'support' = 'software';

  setTab(tab: 'software' | 'support') {
    this.activeTab = tab;
  }
}
