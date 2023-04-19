import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userform:FormGroup
  constructor(private form: FormBuilder,private us:UserService){
    this.userform=form.group({
      name:[''],
      age:[''],
      Address:[''],
      gender:[''],
      qualification:[''],
    })
  }
  add(){
    this.us.addUser({name:this.userform.value.name,age:this.userform.value.age,address:this.userform.value.Address,gender:this.userform.value.gender,qualification:this.userform.value.qualification})
  }
}
