declare type WebAppParams = {
  queryString: string;
  /**
   * query parameter (single)
   */
  parameter: { [key: string]: string };
  /**
   * query parameters (array)
   */
  parameters: { [key: string]: string[] };
  contentLength: number;
  /**
   * url path (after exex/*)
   */
  pathInfo?: string;
  contextPath: string;
};
