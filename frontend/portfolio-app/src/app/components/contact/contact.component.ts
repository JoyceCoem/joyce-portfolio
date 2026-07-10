import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  submitting = false;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.errorMessage = '';

    this.portfolioService.submitContact(this.form.value).subscribe(result => {
      this.submitting = false;
      if ('error' in result) {
        this.errorMessage = result.error;
      } else {
        this.submitted = true;
        this.form.reset();
      }
    });
  }
}
