import { Component } from '@angular/core';
import {ExchangeService} from './exchange.service';

@Component({
    selector: 'converter',
    providers:[ExchangeService],
    template: `<h2>Konwerter Walutowy</h2>
            Przelicz: <input type="number" [(ngModel)]="baseAmount"
            [ngClass]="{error:isValid(baseAmount), warning: baseAmount<0}">
            <currency-select [(selected)]="baseCurrency"></currency-select>
            = <strong>{{targetAmount | number:'1.2-2'}}</strong> 
            <currency-select [(selected)]="targetCurrency"></currency-select>
            
            <p *ngIf="isValid(baseAmount)">Proszę wprowadzić wartość do przeliczenia.</p>  
           
            `,
    styles:[` input[type=number] {
                width: 10ex;
                text-align: right;
            }
            .error{
                background-color: #ff5555;
            }
            .warning{
                background-color: #454232;
            }
            `
    ]
})
export class ThirdComponent {

    baseCurrency= "USD";
    targetCurrency="GBP";
    baseAmount = 1;

 

    constructor(private exchangeService: ExchangeService){}

    
    get targetAmount(){
        const exchangeRate = this.exchangeService.
            getExchangeRate(this.baseCurrency,this.targetCurrency);
       return this.baseAmount * exchangeRate
    }

    isValid(value){
        return !Number.isFinite(value);
    }
  
}