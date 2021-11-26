export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';

export interface ApiRequestConfig {
url?: string;
method?: Method;
baseURL?: string;
headers?: any;
params?: any;
paramsSerializer?: (params: any) => string;
data?: any;
timeout?: number;
timeoutErrorMessage?: string;
withCredentials?: boolean;
xsrfCookieName?: string;
xsrfHeaderName?: string;
onUploadProgress?: (progressEvent: any) => void;
onDownloadProgress?: (progressEvent: any) => void;
maxContentLength?: number;
validateStatus?: ((status: number) => boolean) | null;
maxRedirects?: number;
socketPath?: string | null;
httpAgent?: any;
httpsAgent?: any;
}

interface ApiResponse<T = any>  {
data: T;
status: number;
statusText: string;
headers: any;
config: ApiRequestConfig;
request?: any;
}

export interface ApiModuleProps{
defaults: ApiRequestConfig;
getUri(config?: ApiRequestConfig): string;
request<T = any, R = ApiResponse<T>> (config: ApiRequestConfig): Promise<R>;
get<T = any, R = ApiResponse<T>>(url: string, config?: ApiRequestConfig): Promise<R>;
delete<T = any, R = ApiResponse<T>>(url: string, config?: ApiRequestConfig): Promise<R>;
head<T = any, R = ApiResponse<T>>(url: string, config?: ApiRequestConfig): Promise<R>;
options<T = any, R = ApiResponse<T>>(url: string, config?: ApiRequestConfig): Promise<R>;
post<T = any, R = ApiResponse<T>>(url: string, data?: any, config?: ApiRequestConfig): Promise<R>;
put<T = any, R = ApiResponse<T>>(url: string, data?: any, config?: ApiRequestConfig): Promise<R>;
patch<T = any, R = ApiResponse<T>>(url: string, data?: any, config?: ApiRequestConfig): Promise<R>;
}

export interface CreateServerApiDTO {
  create(config?: ApiRequestConfig): ApiModuleProps;
}

export interface ICreateServerApi {
  get<T = any, R = ApiResponse<T>>(url: string, config?: ApiRequestConfig): Promise<R>;
}
class CreateServerApi {
  private apiModule: ApiModuleProps = {} as ApiModuleProps;

  constructor(private createServerApiDTO : CreateServerApiDTO, private config: ApiRequestConfig ) {
    this.apiModule= this.create(this.config);
  }

  private create(config: ApiRequestConfig) {
    return this.createServerApiDTO.create(config);
  }

  get<T = any, R = ApiResponse<T>>(url: string, config?: ApiRequestConfig): Promise<R> {
    return new Promise(async (resolve, reject) => {
      try {
        const result: R = await this.apiModule.get(url, config);
        resolve (result);
      } catch(err) {
        reject(err)
      }
    })
  }
}

export { CreateServerApi };