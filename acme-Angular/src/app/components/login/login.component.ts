import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  msg: string;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({        
        email: ['', Validators.email],            
        password: ['', [Validators.required, Validators.minLength(6)]]        
    });
}

  onSubmit() {     
    
    if (this.form.invalid) {
        console.log("Invalid Form");
        this.msg = "Esto no es un email valido"
        return;
    }
    
    this.accountService.signin(this.form.value)
    .subscribe(res => {      
      localStorage.setItem('token', res.token);
      this.router.navigate(['/perfil']);
      //this.accountService.isLogged = true;
      }, err => {
        console.log(err)
        this.msg = "Usuario ó contraseña incorrecto"
        this.router.navigate(['/login']);
      }
    )
}        

}
