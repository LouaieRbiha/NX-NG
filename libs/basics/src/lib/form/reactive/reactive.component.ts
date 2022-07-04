import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, first, map, of, switchMap, timer } from 'rxjs';

export interface IUserData {
  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

export interface IAddressData {
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  country: FormControl<string | null>;
}

export interface IModule {
  feature: FormControl<string | null>;
  plan: FormControl<string | null>;
  price: FormControl<string | null>;
}

export interface IForm {
  userData: FormGroup<IUserData>;
  addressData: FormGroup<IAddressData>;
  modules: FormArray<FormGroup<IModule>>;
}

@Component({
  selector: 'ng-peaqock-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  signupForm!: FormGroup<IForm>;

  ngOnInit(): void {
    this.signupForm = new FormGroup<IForm>({
      userData: new FormGroup<IUserData>({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null),
        email: new FormControl(null, [Validators.required, Validators.email], this._asyncEmailValidator()),
        password: new FormControl(null),
        confirmPassword: new FormControl(null),
      }),

      addressData: new FormGroup<IAddressData>({
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
      }),

      modules: new FormArray([this.createFormGroup()]),
    });
  }

  private _validateEmail(email: string) {
    return timer(1000).pipe(
      switchMap(() => {
        return email.startsWith('peaqock') ? of(false) : of(true);
      }),
    );
  }

  private _asyncEmailValidator(): AsyncValidatorFn {
    return control =>
      control.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((email: string) => this._validateEmail(email)),
        map((exist: boolean) => {
          return exist ? null : { emailExist: true };
        }),
        first(),
      );
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      feature: new FormControl(null, Validators.required),
      plan: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }

  createModule() {
    const modules = this.signupForm.get('modules') as FormArray;
    modules.push(this.createFormGroup());
  }

  removeModule(index: number) {
    const modules = this.signupForm.get('modules') as FormArray;
    modules.length > 1 ? modules.removeAt(index) : modules.reset();
  }

  get modules() {
    return this.signupForm.get('modules') as FormArray;
  }

  onSubmit() {
    console.log('signupForm', this.signupForm.value);
  }
}
