import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesLogFiltersComponent } from './messages-log-filters.component';



@NgModule({
    declarations: [
        MessagesLogFiltersComponent
    ],
    exports: [
        MessagesLogFiltersComponent
    ],
    imports: [
        CommonModule,
        NgbDatepickerModule,
        FormsModule
    ]
})
export class MessagesLogFiltersModule { }
