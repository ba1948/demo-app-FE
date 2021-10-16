import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from '../../services/http/countries.service';
import { UsersService } from '../../services/http/users.service';
import { MessagesLogFiltersService } from '../../services/messages-log-filters/messages-log-filters.service';

@Component({
    selector: 'messages-log-filters',
    templateUrl: './messages-log-filters.component.html'
})
export class MessagesLogFiltersComponent implements OnInit {

    public hoveredDate: NgbDate | null = null;

    public fromDate: NgbDate | null = null;
    public toDate: NgbDate | null = null;

    public users: any = [];

    public countries: any = [];

    constructor(
        public calendar: NgbCalendar,
        public formatter: NgbDateParserFormatter,
        private _httpUsersService: UsersService,
        private _httpCountriesService: CountriesService,
        private _messagesLogFiltersService: MessagesLogFiltersService
        ) {
        this.fromDate = calendar.getPrev(calendar.getToday(), 'd', 7);
        this.toDate = calendar.getToday();
    }

    ngOnInit() {
        this._httpCountriesService.getList().subscribe(
            (data) => {
                this.countries = data;
            },
            (error: HttpErrorResponse) => {}

        );

        this._httpUsersService.getList().subscribe(
            (data) => {
                this.users = data;
            },
            (error: HttpErrorResponse) => {}

        );
    }

    public onDateSelection(date: NgbDate): void {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.toDate = null;
            this.fromDate = date;
        }

        if (this.fromDate) {
            this._messagesLogFiltersService.dateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
        }

        if (this.toDate) {
            this._messagesLogFiltersService.dateTo = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        }
    }

    public isHovered(date: NgbDate): boolean | null {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    public isInside(date: NgbDate): boolean | null {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }

    public isRange(date: NgbDate): boolean | null {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }

    public filter(): void {
       this._messagesLogFiltersService.fetch();
    }

    public countryChanged(country: any): void {
        this._messagesLogFiltersService.countryId = country.target.value ?? null;
    }

    public userChanged(user: any): void {
        this._messagesLogFiltersService.userId = user.target.value ?? null;
    }
}
