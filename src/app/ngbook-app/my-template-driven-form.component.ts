import { Component } from '@angular/core';

@Component({
    selector: 'my-template-driven-form',
    template: `
    <form #form="ngForm" (ngSubmit)="submit(form.value)">
      <div>
        <label>Firstname:</label>
        <input type="text" name="firstname" ngModel>
      </div>
      <div>
        <label>Lastname:</label>
        <input type="text" name="lastname" ngModel>
      </div>
      <div>
        <label>Street:</label>
        <input type="text" name="street" ngModel>
      </div>
      <div>
        <label>Zip:</label>
        <input type="text" name="zip" ngModel>
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" ngModel>
      </div>
    
      <button type="submit">Submit</button>
    </form>

    <pre>
        {{form.value | json}}
    </pre>
    
    <h4>Submitted</h4>
    <pre>    
        {{value | json }}
    </pre>
  `
})
export class FormComponent {

    value: any;

    submit(form) {
        this.value = form;
    }
}
