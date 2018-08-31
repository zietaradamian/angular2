

export class ExchangeService{

    supportedCurrencies = ['EUR','GBP','USD'];

    private exchangeRate = {
        'USD/GBP': 0.7,
        'USD/EUR':1.30,
        'EUR/USD':1.30,
        'GBP/EUR':1.24,
        'GBP/USD':1.42
    }

    getExchangeRate(baseCurrency:string,targetCurrency:string){
        return this.exchangeRate[baseCurrency + '/'+ targetCurrency]
    }

}