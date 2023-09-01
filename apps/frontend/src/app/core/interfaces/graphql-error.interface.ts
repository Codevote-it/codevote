/* eslint-disable */
export interface GraphglErrorInterface {
    request: any;
    response: {
      data: any;
      errors: ErrorInterface[];
    };
}

export interface ErrorInterface {
  extensions: {
    code: string;
    exception: {
      message: string;
      name: string;
      stacktrace: string[];
    };
  };
  locations: any[];
  message: string;
  path: string[];
  headers: any;
  status: number;
}
/* eslint-enable */
