export class FetchDataSevice {
  fetchNews() {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=95fcd3bbff6e48ed8e0eee2d40923176";
    var req = new Request(url);
    fetch(req).then(function(response) {
      console.log(response.json());
    });
  }
}
