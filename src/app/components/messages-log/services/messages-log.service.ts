import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'any'})
export class MessagesLogService {

    private _baseApi = '/api/v1';

    constructor(private _http: HttpClient) { }

    public getList(dateFrom: string, dateTo: string, countryId: string | null, userId: string | null) {
        const headers: any = {};
        let params: any = {
            'date_from': dateFrom,
            'date_to': dateTo
        };

        if (userId) {
            params['user_id'] = userId;
        }

        if (countryId) {
            params['country_id'] = countryId;
        }

        return this._http.get(this._baseApi + '/messages-log', { headers, params }).pipe(map(item => item));
    }
}
