import { Component, OnInit } from '@angular/core';
import { LogInStateService } from "../../Core/Services/log-in-state.service";
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable, EMPTY} from 'rxjs';
import {catchError} from 'rxjs/operators';

interface Product {
    id: number,
    title: string,
    price: number
  }

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    emsLoginFormModel: FormGroup;

    products$: Observable<Product[]>;
    error:string;

    constructor(private data: LogInStateService, private httpClient: HttpClient) {
        this.emsLoginFormModel = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });

    }

    ngOnInit() {
        //this.data.currentMessage.subscribe(message => this.message = message)
    }

    login() {
        //let httpParams = new HttpParams().set('title', "TANG");
        //this.products$ = this.httpClient.get<Product[]>('https://ems-portal.mpvm37.mp.ics.com/tang.php',{params:httpParams})
        //.pipe(
        //    catchError( err => {
        //      this.error = `Can't get products. Got ${err.status} from ${err.url}`;
        //      return EMPTY;     // empty observable
        //    })
        //  );
        console.log(this.emsLoginFormModel.value);
        //console.log(this.products$);

        this.data.changeMessage(true);
    }

}
