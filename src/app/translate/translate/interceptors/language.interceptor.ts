import { TranslationService } from './../translation.service';
import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const translateService = inject(TranslationService);

  const lang = req.clone({
    headers: new HttpHeaders({
      'Accept-Language': translateService.currentLang(),
    }),
  });
  return next(lang);
};
