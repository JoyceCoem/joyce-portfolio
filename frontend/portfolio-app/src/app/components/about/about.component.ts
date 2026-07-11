import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  interests = [
    { label: 'Cybersecurity', detail: 'The foundation: networks, systems, and how to defend them' },
    { label: 'AI Security', detail: 'Where intelligent systems and security intersect, and the new risks that come with it' },
    { label: 'Cloud Security', detail: 'Securing the infrastructure that most modern systems now run on' },
    { label: 'Digital Health', detail: 'Applying secure tech thinking to healthcare and wellbeing tools' },
    { label: 'Research', detail: 'Going deeper than coursework, understanding why attacks work, not just how to stop them' }
    { label: 'Learning while coding', detail: 'Building projects that teach me something new with every line' }
  ];
}
