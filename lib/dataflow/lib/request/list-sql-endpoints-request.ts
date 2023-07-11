/**
 *
 *
 * OpenAPI spec version: 20200129
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataflow/ListSqlEndpoints.ts.html |here} to see how to use ListSqlEndpointsRequest.
 */
export interface ListSqlEndpointsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment in which to query resources.
   */
  "compartmentId"?: string;
  /**
   * The unique id of the SQL Endpoint.
   */
  "sqlEndpointId"?: string;
  /**
   * A filter to return only those resources whose sqlEndpointLifecycleState matches the given sqlEndpointLifecycleState.
   */
  "lifecycleState"?: model.SqlEndpointLifecycleState;
  /**
   * The query parameter for the Spark application name.
   *
   */
  "displayName"?: string;
  /**
   * The maximum number of items that can be returned.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The ordering of results in ascending or descending order.
   *
   */
  "sortOrder"?: ListSqlEndpointsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. The default order for timeCreated is descending. The default order for displayName is ascending. If no value is specified timeCreated is used by default.
   *
   */
  "sortBy"?: ListSqlEndpointsRequest.SortBy;
  /**
   * Unique identifier for the request. If provided, the returned request ID will include this value.
   * Otherwise, a random request ID will be generated by the service.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListSqlEndpointsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Id = "id",
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}