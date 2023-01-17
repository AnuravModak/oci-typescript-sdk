/**
 *
 *
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/ListPackages.ts.html |here} to see how to use ListPackagesRequest.
 */
export interface ListPackagesRequest extends common.BaseRequest {
  /**
   * List only the information for this Digital Assistant instance.
   */
  "odaInstanceId"?: string;
  /**
   * Resource type identifier. Used to limit query results to the items which are applicable to the given type.
   */
  "resourceType"?: string;
  /**
 * List only the information for the package with this name. Package names are unique to a publisher and may not change.
* <p>
Example: `My Package`
* 
 */
  "name"?: string;
  /**
 * List only the information for the Digital Assistant instance with this user-friendly name. These names don't have to be unique and may change.
* <p>
Example: `My new resource`
* 
 */
  "displayName"?: string;
  /**
   * Should we return only the latest version of a package (instead of all versions)?
   */
  "isLatestSkillOnly"?: boolean;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
 * The page at which to start retrieving results.
* <p>
You get this value from the `opc-next-page` header in a previous list request.
* To retireve the first page, omit this query parameter.
* <p>
Example: `MToxMA==`
* 
 */
  "page"?: string;
  /**
   * Sort the results in this order, use either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListPackagesRequest.SortOrder;
  /**
 * Sort on this field. You can specify one sort order only. The default sort field is `TIMECREATED`.
* <p>
The default sort order for `TIMECREATED` is descending, and the default sort order for `DISPLAYNAME` is ascending.
* 
 */
  "sortBy"?: ListPackagesRequest.SortBy;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
}

export namespace ListPackagesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }
}
