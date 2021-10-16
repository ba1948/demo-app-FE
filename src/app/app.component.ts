import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public menuShown = true;

    public toggleMenu() {
        this.menuShown = !this.menuShown;
    }
}
