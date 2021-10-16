import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesLogFiltersModule } from 'src/app/shared/components/message-log-filters/messages-log-filters.module';
import { MessagesLogComponent } from './components/messages-log.component';



@NgModule({
    declarations: [
        MessagesLogComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: MessagesLogComponent
        }]),
        MessagesLogFiltersModule
    ]
})
export class MessagesLogModule { }
