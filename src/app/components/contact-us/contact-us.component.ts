import { contact } from './contact.routes';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Contact } from './interface/contact';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../environments/endpoints';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonComponent } from '../shared/button/button.component';
import { CustomValidatorsService } from '../services/custom-validators/custom-validators.service';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from '../layout/loader/loader.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    ReactiveFormsModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatError,
    ButtonComponent,
    TranslateModule,
    LoaderComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent implements OnInit {
  contactUs$!: Observable<Contact>;
  httpservice = inject(HttpClient);
  contactForm!: FormGroup;
  fb = inject(FormBuilder);
  errorMessage = signal('');
  resumePlaceHolder: string = '';
  destroy$ = new Subject<void>();
  imgUrl = environment.baseUrl;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  formControlData(formControl: any): FormControl {
    return this.contactForm.get(formControl) as FormControl;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.contactUs$ = this.httpservice.get<Contact>(Endpoints.CONTACT);
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, CustomValidatorsService.isEmail]],
      phone: ['', [Validators.required, CustomValidatorsService.isPhone]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log(this.contactForm.value);
    if (this.contactForm.invalid) return;
    const formData: FormData = new FormData();
    Object.entries(this.contactForm.value).forEach(([key, val]) => {
      console.log(key, val);
      formData.append(key, val as any);
    });
    this.httpservice
      .post(Endpoints.CAREER, formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.formGroupDirective.resetForm();
          this.contactForm.reset();
          this.resumePlaceHolder = '';
        },
      });
  }
}
