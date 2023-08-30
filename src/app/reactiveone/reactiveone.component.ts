import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveone',
  templateUrl: './reactiveone.component.html',
  styleUrls: ['./reactiveone.component.css']
})
export class ReactiveoneComponent{
  forms: FormGroup= new FormGroup({
    "Username": new FormControl('',[Validators.required]),
    "Password": new FormControl('',[Validators.required]),
    "Check":new FormControl(false,Validators.required)
  })
  Reset(forms:FormGroup){
    forms.reset();
  }
  setvalue(forms:FormGroup){
    let user={
      "Username":"sivakrishna",
      "Password":"krishna",
      "Check":false
    }
    forms.setValue(user)
  }
  OnSubmit(forms:FormGroup){
       console.log(forms);
  }
}



