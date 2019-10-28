export class RequestService {
  async getRequest(url) {
    return await fetch(url)
      .then(res => res.json())
      .catch(err => console.log("Error: ", err));
  }
}
