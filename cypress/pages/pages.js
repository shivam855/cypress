let  url = Cypress.env("url");

const pagesObject = {
    searchValue : ".gLFyf",
    suggestedList : ".erkvQe"
}
export default {

    visitingUrl() {  
        return cy.visit(url);
    },

    enteringValue(value) {
        cy.get(pagesObject["searchValue"]).type(value);
        cy.get(pagesObject["suggestedList"]).find("li").eq(0).click();
    }
    
}