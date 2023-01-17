/**
 *
 *
 * OpenAPI spec version: 20210630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/devops/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogsRequest.
 */
export interface ListWorkRequestLogsRequest extends common.BaseRequest {
  /**
   * The ID of the asynchronous work request.
   */
  "workRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request.  If you need to contact Oracle about a particular request, provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The sort order to use. Use either ascending or descending.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order can be provided. Default sort order is descending and is based on the timeAccepted field.
   */
  "sortBy"?: ListWorkRequestLogsRequest.SortBy;
}

export namespace ListWorkRequestLogsRequest {
  export enum SortBy {
    TimeAccepted = "timeAccepted"
  }
}
