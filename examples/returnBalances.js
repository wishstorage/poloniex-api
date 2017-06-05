const TradingApi = require('../index').tradingApi;

const APIKEY = '<Yours here>';
const SECRET = '<Yours here>';
const tradingApi = TradingApi.create(APIKEY, SECRET);

tradingApi.returnBalances()
.then((msg) => {
  console.log(msg);
})
.catch(err => console.log(err));
