import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  focusAreas = [
    { label: 'Cybersecurity', detail: 'Networks, systems, and how to defend them' },
    { label: 'AI Security', detail: 'Where intelligent systems and security intersect' },
    { label: 'Cloud Security', detail: 'Securing the infrastructure modern systems run on' },
    { label: 'Digital Health', detail: 'Secure tech thinking applied to healthcare' }
  ];
}
