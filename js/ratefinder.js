import * as service from './rate_service_mock';

service.findAll()
  .then(rates => {
    let html = '';
    rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
    document.getElementById("rates").innerHTML = html;
  })
  .catch(e => console.log(e));