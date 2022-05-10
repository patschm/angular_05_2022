import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit 
{
  public theForm: FormGroup;

  public name: string = "Joan";
  public age:number = 34;
  public submit()
  {
      console.log(this.name + " " + this.age);
      if (!this.theForm.invalid)
      {
        this.buildForm();
      }
  }

  private buildForm(): void
  {
    this.theForm = this.bld.group({
      "name":["", Validators.required],
      "age":[0, [Validators.min(18), Validators.max(123)]]
    });
  }
  public get user() : any
  {
    return {
      name: this.theForm.get("name"),
      age : this.theForm.get("age")
    };
  }
  constructor(private bld:FormBuilder)
  {
    this.buildForm();
  }

  ngOnInit() {
  }

}
