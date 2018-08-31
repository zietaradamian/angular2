import { Component } from '@angular/core';

@Component({
    selector: 'converter',
    template: `<h2>Konwerter Walutowy</h2>
            Przelicz: <input type="number" [(ngModel)]="baseAmount"> USD 
            <p>
                <strong>{{baseAmount}}</strong> USD = 
                <strong>{{targetAmount}}</strong> GBP  
            </p>
            `,
    styles:[` input[type=number] {
                width: 10ex;
                text-align: right;
            }
            `
    ]
})
export class ThirdComponent {

    exchangeRate = 0.70;
    baseAmount = 1;

    get targetAmount(){
       return this.baseAmount * this.exchangeRate
    }
}