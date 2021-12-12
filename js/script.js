const companies = document.querySelector('#companies');
const templates = document.querySelector('#templates');
const queries = document.querySelector('#queries');

companiesCounter = 1;
var mainCompaniesInterval = setInterval(companiesInterval , 200);
function companiesInterval() {
    companiesCounter++;
    companies.innerText = companiesCounter;

    if(companiesCounter == 10) {
        clearInterval(mainCompaniesInterval)
    }
}


templatesCounter = 1;
var mainTemplatesInterval = setInterval(templatesInterval , 8);
function templatesInterval() {
    templatesCounter++;
    templates.innerText = templatesCounter;

    if(templatesCounter == 314) {
        clearInterval(mainTemplatesInterval)
    }
}

queriesCounter = 1;
var mainQueriesInterval = setInterval(queriesInterval , 200);
function queriesInterval() {
    queriesCounter++;
    queries.innerText = queriesCounter;

    if(queriesCounter == 12) {
        clearInterval(mainQueriesInterval)
    }
}