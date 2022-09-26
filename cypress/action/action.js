import pages from "../pages/pages.js";
import utilites from "../utilites/utilites.js";

export default {
    data2(url) {
        return utilites.filterDataSet("./cypress/fixtures/example.json", url).then(data1 => {
            return data1["url"];
        });
    },

    visitingUrl() {
        pages.visitingUrl();
    },

    enteringValue(url) {
        this.data2(url).then(data3 => {
            pages.enteringValue(data3);
        });
    }
}