import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'any'})
export class UsersService {

    private _baseApi = '/api/v1';

    constructor(private _http: HttpClient) { }

    public getList() {
        return this._http.get(this._baseApi + '/users').pipe(map(item => item));
    }
}
