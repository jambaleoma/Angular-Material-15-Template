import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  form = this.fb.group({
    name: '',
  })

  constructor(private fb: FormBuilder) {}
}
