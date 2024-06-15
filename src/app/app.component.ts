import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SideNavToggle {
  screenWidth: number;
  collapesed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webpages';
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    []
    this.myForm = this.fb.group({
      users: this.fb.array([])
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully!');
      // You can perform further actions like sending data to backend, etc.
    } else {
      console.log('Form is invalid!');
      // You can handle error messages or any other actions for invalid form here.
    }
  }


  get users() {
    return this.myForm.get('users') as FormArray;
  }

  createUser(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  addUser() {
    this.users.push(this.createUser());
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }

  // for sidenavbar


  isSideNavCollaped: boolean = false;
  screenWidth: number = 0;

  onToggleSidenav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollaped = data.collapesed;
  }

}
