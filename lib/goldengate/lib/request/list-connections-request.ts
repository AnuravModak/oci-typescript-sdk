/**
 *
 *
 * OpenAPI spec version: 20200407
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/goldengate/ListConnections.ts.html |here} to see how to use ListConnectionsRequest.
 */
export interface ListConnectionsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to list resources.
   *
   */
  "compartmentId": string;
  /**
   * The array of technology types.
   *
   */
  "technologyType"?: Array<model.TechnologyType>;
  /**
   * The array of connection types.
   *
   */
  "connectionType"?: Array<model.ConnectionType>;
  /**
   * The OCID of the deployment which for the connection must be assigned.
   *
   */
  "assignedDeploymentId"?: string;
  /**
   * Filters for compatible connections which can be, but currently not assigned to the deployment specified by its id.
   *
   */
  "assignableDeploymentId"?: string;
  /**
   * Filters for connections which can be assigned to the latest version of the specified deployment type.
   *
   */
  "assignableDeploymentType"?: model.DeploymentType;
  /**
   * A filter to return only connections having the 'lifecycleState' given.
   *
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only the resources that match the entire 'displayName' given.
   *
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   *
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually
   * retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order can be provided. Default order for 'timeCreated' is
   * descending.  Default order for 'displayName' is ascending. If no value is specified
   * timeCreated is the default.
   *
   */
  "sortBy"?: ListConnectionsRequest.SortBy;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListConnectionsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
