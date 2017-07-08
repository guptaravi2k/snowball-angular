
import { Component } from '@angular/core'


@Component({
    selector: 'app-home',
    templateUrl: './ngbook-home.component.html'
})
export class NgbookHomeComponent {
    homeMsg = 'This is ngbook home1'
    username = 'ravi1';
    counterValue = 44;
    test = 'Hello NG2';
    testDate1 = new Date('2016-07-22');
    testDate2 = new Date('2016-09-15');

    /*constructor() {
        this.test = 'Hello NG2';
        this.testDate1 = new Date('2016-07-22');
        this.testDate2 = new Date('2016-09-15');
    }*/

}
