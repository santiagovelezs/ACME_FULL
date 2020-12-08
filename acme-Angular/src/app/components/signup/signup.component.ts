import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../services/account.service';
import { AlertService } from './../../services/alert.service';

@Component({ 
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
 })
export class SignupComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.email],            
            password: ['', [Validators.required, Validators.minLength(6)]],
            gender: ['', Validators.required],
            birth_date: ['', Validators.required],
            city: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        console.log("sub");
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        /*if (this.form.invalid) {console.log("sub2");
            return;
        }*/

        this.loading = true;
        this.accountService.signup(this.form.value)
            .pipe(first())
            .subscribe((res) => {
                this.form.reset();
                console.log(res);
                this.loading = false
                this.router.navigate(['/login']);
            });
    }
}