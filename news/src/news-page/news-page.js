import { FetchDataSevice } from "../services/fetch-data-service";

export class NewsPage {
  constructor() {
    this.fetchDataService = new FetchDataSevice();
  }

  fetchData() {
    this.fetchDataService.fetchNews();
  }
}
