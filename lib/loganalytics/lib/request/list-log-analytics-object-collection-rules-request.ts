/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListLogAnalyticsObjectCollectionRules.ts.html |here} to see how to use ListLogAnalyticsObjectCollectionRulesRequest.
 */
export interface ListLogAnalyticsObjectCollectionRulesRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter to return rules only matching with this name.
   */
  "name"?: string;
  /**
   * Lifecycle state filter.
   *
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListLogAnalyticsObjectCollectionRulesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeUpdated is descending.
   * Default order for name is ascending. If no value is specified timeUpdated is default.
   *
   */
  "sortBy"?: ListLogAnalyticsObjectCollectionRulesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListLogAnalyticsObjectCollectionRulesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeUpdated = "timeUpdated",
    TimeCreated = "timeCreated",
    Name = "name"
  }
}
