import axios, { AxiosInstance } from 'axios';

export class ApiCaller {
  static apiClient: AxiosInstance;

  static init(){
    this.apiClient = axios.create({
      baseURL: 'https://catfact.ninja'
    })
  }

  static async callApi() {
    if(!this.apiClient) throw Error('apiClient not initialised')

    const { data } = await this.apiClient.request( {
      url: '/fact',
      baseURL: 'https://catfact.ninja'
    })
    return data;
  }

  static async patchApi() {
    if(!this.apiClient) throw Error('apiClient not initialised')

    const { data } = await this.apiClient.request( {
      method: 'patch',
      url: '/fact',
      baseURL: 'https://catfact.ninja'
    })
    // throw new Error(SOME_CONSTANT);
    return data;
  }
}
