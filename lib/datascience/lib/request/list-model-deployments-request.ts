/**
 *
 *
 * OpenAPI spec version: 20190101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datascience/ListModelDeployments.ts.html |here} to see how to use ListModelDeploymentsRequest.
 */
export interface ListModelDeploymentsRequest extends common.BaseRequest {
  /**
   * <b>Filter</b> results by the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * <b>Filter</b> results by [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm). Must be an OCID of the correct type for the resource type.
   *
   */
  "id"?: string;
  /**
   * <b>Filter</b> results by the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project.
   */
  "projectId"?: string;
  /**
   * <b>Filter</b> results by its user-friendly name.
   */
  "displayName"?: string;
  /**
   * <b>Filter</b> results by the specified lifecycle state. Must be a valid
   * state for the resource type.
   *
   */
  "lifecycleState"?: model.ModelDeploymentLifecycleState;
  /**
   * <b>Filter</b> results by the [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the user who created the resource.
   */
  "createdBy"?: string;
  /**
 * For list pagination. The maximum number of results per page,
* or items to return in a paginated \"List\" call.
* 1 is the minimum, 1000 is the maximum.
* See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/usingapi.htm#nine).
* <p>
Example: `500`
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the `opc-next-page` response
* header from the previous \"List\" call.
* <p>
See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/usingapi.htm#nine).
* 
 */
  "page"?: string;
  /**
   * Specifies sort order to use, either `ASC` (ascending) or `DESC` (descending).
   *
   */
  "sortOrder"?: ListModelDeploymentsRequest.SortOrder;
  /**
   * Specifies the field to sort by. Accepts only one field.
   * By default, when you sort by `timeCreated`, results are shown
   * in descending order. When you sort by `displayName`, results are
   * shown in ascending order. Sort order for the `displayName` field is case sensitive.
   *
   */
  "sortBy"?: ListModelDeploymentsRequest.SortBy;
  /**
   * Unique Oracle assigned identifier for the request. If you need to contact Oracle about a particular request, then provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListModelDeploymentsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
