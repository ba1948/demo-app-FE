import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MessagesLogFiltersService } from 'src/app/shared/services/messages-log-filters/messages-log-filters.service';

@Component({
    selector: 'messages-log-component',
    templateUrl: './messages-log.component.html'
})
export class MessagesLogComponent implements OnInit {

    public data: Array<any> = [];

    public errors = [];

    private _subscribers: Array<any> = [];

    constructor(
        private _calendar: NgbCalendar,
        private _messagesLogService: MessagesLogFiltersService
        ) {
        this._subscribers.push(
            this._messagesLogService.data$.subscribe(
                (res: Array<any>) => {
                    this.data = res;
            })
        );
    }

    ngOnInit() {
        // initialize first load since it doesn't make sense to have empty table on first load
        // loads last 7 days
        const dateFrom = this._calendar.getPrev(this._calendar.getToday(), 'd', 7);
        const dateTo = this._calendar.getToday();

        this._messagesLogService.dateFrom = dateFrom.year + '-' + dateFrom.month + '-' + dateFrom.day;
        this._messagesLogService.dateTo = dateTo.year + '-' + dateTo.month + '-' + dateTo.day;

        this._messagesLogService.fetch();
    }
}
