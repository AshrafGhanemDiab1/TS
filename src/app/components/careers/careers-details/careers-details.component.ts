import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Endpoints } from '../../../environments/endpoints';
import { CommonModule } from '@angular/common';
import { CareerDetails } from '../interface/careersDetails';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import {
  FloatLabelType,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { map, takeUntil } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatOption } from '@angular/material/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CustomValidators } from 'ngx-custom-validators';
import { CustomValidatorsService } from '../../services/custom-validators/custom-validators.service';
import validator from 'validator';

@Component({
  selector: 'app-careers-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './careers-details.component.html',
  styleUrl: './careers-details.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class CareersDetailsComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly id = signal('');
  careersDetails$!: Observable<CareerDetails>;
  httpservice = inject(HttpClient);
  resumePlaceHolder: string = '';
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  @Input() disabled!: boolean;

  careersForm!: FormGroup;
  fb = inject(FormBuilder);
  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe((params) => {
      const id = params.get('id');
      if (!id) return;
      this.id.set(id);
      this.careersDetails$ = this.httpservice.get<CareerDetails>(
        Endpoints.CAREER + `${id}/`
      );
    });
    this.InitForm();
  }

  destroy$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  InitForm(): void {
    this.careersForm = this.fb.group({
      name: ['', []],
      email: ['', []],
      phone: ['', []],
      country: ['', []],
      cv: ['', []],
      cv_name: [''],
    });
  }
  onSubmit() {
    console.log(this.careersForm.value);
    if (this.careersForm.invalid) return;
    const formData: FormData = new FormData();
    Object.entries(this.careersForm.value).forEach(([key, val]) => {
      console.log(key, val);
      formData.append(key, val as any);
    });
    this.httpservice
      .post(Endpoints.CAREER, formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.formGroupDirective.resetForm();
          this.careersForm.reset();
          this.resumePlaceHolder = '';
        },
      });
  }
  handleFileInput(ev: any) {
    this.careersForm.controls['cv'].setValue(ev.target.files[0]);
    this.careersForm.controls['cv_name'].setValue(ev.target.files[0].name);

    this.resumePlaceHolder = ev.target.files[0].name;
  }
}
