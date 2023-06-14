import { FormBuilder, Validators } from '@angular/forms';
export class CreateForms {
  static contactForm() {
    const formBuilder = new FormBuilder();
    return formBuilder.group({
      assunto: ['', Validators.compose([Validators.required])],
      desc: ['', Validators.compose([Validators.required])],
    });
  }
}
