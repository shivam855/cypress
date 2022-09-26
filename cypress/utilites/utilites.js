export default {
    readData(path) {
        return cy.readFile(path);
    },
    filterDataSet(path, filter) {
        return new Cypress.Promise((resolve, reject) => {
            this.readData(path).then(dataList => {
                dataList.forEach(dataSet => {
                    this.compareObjects(dataSet, filter).then(criteria => {
                        if (criteria) { 
                            resolve(dataSet);
                        }
                    });
                });
            });
        });
    },
    compareObjects(dataSet, filter) {
        return new Cypress.Promise((resolve, reject) => {
            let match = true;
            Object.keys(JSON.parse(filter)).forEach(filterKey => {
                if (JSON.parse(filter)[filterKey] !== dataSet[filterKey]) match = false;
            });
            resolve(match);
        });
    }
}