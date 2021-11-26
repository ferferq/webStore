import { ICreateServerApi } from "../..";

interface ExecResultODT<T> {
  data: T;
  status: number;
}

export class SearchMoviesUse {
  constructor(private apiModuleProps: ICreateServerApi) { }
  async exec<T = any>(search: string): Promise<ExecResultODT<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.apiModuleProps.get<T>('/search/movie', {
          params: {
            api_key: 'fdf768457dad55d9f9c1dfed974263ec',
            query: search,
          }
        });
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }
}