/**
 *
 *
 * OpenAPI spec version: 20190415
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/mysql/ListConfigurations.ts.html |here} to see how to use ListConfigurationsRequest.
 */
export interface ListConfigurationsRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Customer-defined unique identifier for the request. If you need to
   * contact Oracle about a specific request, please provide the request
   * ID that you supplied in this header with the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * The requested Configuration instance.
   */
  "configurationId"?: string;
  /**
   * Configuration Lifecycle State
   */
  "lifecycleState"?: string;
  /**
   * The requested Configuration types.
   */
  "type"?: Array<ListConfigurationsRequest.Type>;
  /**
   * A filter to return only the resource matching the given display name exactly.
   */
  "displayName"?: string;
  /**
   * The requested Shape name.
   */
  "shapeName"?: string;
  /**
   * The field to sort by. Only one sort order may be provided. Time fields are default ordered as descending. Display name is default ordered as ascending.
   *
   */
  "sortBy"?: ListConfigurationsRequest.SortBy;
  /**
   * The sort order to use (ASC or DESC).
   */
  "sortOrder"?: ListConfigurationsRequest.SortOrder;
  /**
   * The maximum number of items to return in a paginated list call. For information about pagination, see
   * [List Pagination](https://docs.cloud.oracle.com/#API/Concepts/usingapi.htm#List_Pagination).
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` or `opc-prev-page` response header from
   * the previous list call. For information about pagination, see [List
   * Pagination](https://docs.cloud.oracle.com/#API/Concepts/usingapi.htm#List_Pagination).
   *
   */
  "page"?: string;
}

export namespace ListConfigurationsRequest {
  export enum Type {
    Default = "DEFAULT",
    Custom = "CUSTOM"
  }

  export enum SortBy {
    DisplayName = "displayName",
    ShapeName = "shapeName",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
