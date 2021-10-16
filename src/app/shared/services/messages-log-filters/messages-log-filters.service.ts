import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MessagesLogService } from 'src/app/components/messages-log/services/messages-log.service';

@Injectable()
export class MessagesLogFiltersService {

    public dateFrom: string = '';

    public dateTo: string = '';

    public userId: string = '';

    public countryId: string = '';

    public data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(
        private _httpMessageLogService: MessagesLogService,
    ) { }

    public fetch(): void {
        this._httpMessageLogService.getList(this.dateFrom, this.dateTo, this.countryId, this.userId).subscribe(
            (data) => {
                this.data$.next(data);
            },
            (error: HttpErrorResponse) => {}
        )
    }
}
