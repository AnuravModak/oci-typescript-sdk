/**
 *
 *
 * OpenAPI spec version: 20200801
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/tenantmanagercontrolplane/ListAssignedSubscriptions.ts.html |here} to see how to use ListAssignedSubscriptionsRequest.
 */
export interface ListAssignedSubscriptionsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The ID of the subscription to which the tenancy is associated.
   */
  "subscriptionId"?: string;
  /**
   * The client request ID for tracing.
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
   * The sort order to use, whether 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order can be provided.
   * * The default order for timeCreated is descending.
   * * The default order for displayName is ascending.
   * * If no value is specified, timeCreated is the default.
   *
   */
  "sortBy"?: ListAssignedSubscriptionsRequest.SortBy;
}

export namespace ListAssignedSubscriptionsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
