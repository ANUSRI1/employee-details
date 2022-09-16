import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  employeeForm !:FormGroup;


  constructor(private formBuilder :FormBuilder ,private api : ApiService) { }

  ngOnInit(): void {

    this.employeeForm=this.formBuilder.group({
      EMP_ID :['',Validators.required],
      Name :['',Validators.required],

      Email :['',Validators.required],
     

    })
  }

  addProduct(){
    if(this.employeeForm.valid){
      this.api.postProduct(this.employeeForm.value)
      .subscribe({
        next:(res)=>{
          alert("Employee details added sucessfully")
          this.employeeForm.reset();
        },
        error:()=>{
          alert("error while adding the employee")
        }
      })

    }
  
    
  }

    
  }


