/**
 *
 *
 * OpenAPI spec version: 20210217
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataconnectivity/ListEndpoints.ts.html |here} to see how to use ListEndpointsRequest.
 */
export interface ListEndpointsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment containing the resources you want to list.
   */
  "compartmentId": string;
  /**
   * DCMS registry ID
   */
  "registryId"?: string;
  /**
   * Used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * Sets the maximum number of results per page, or items to return in a paginated `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The value for this parameter is the `opc-next-page` or the `opc-prev-page` response header from the previous `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Lifecycle state of the resource.
   */
  "lifecycleState"?: ListEndpointsRequest.LifecycleState;
  /**
   * Specifies sort order to use, either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListEndpointsRequest.SortOrder;
  /**
   * This parameter allows users to specify a sort field. Default sort order is the descending order of `timeCreated` (most recently created objects at the top). Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListEndpointsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListEndpointsRequest {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Stopped = "STOPPED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME",
    Timeupdated = "TIMEUPDATED"
  }
}
