/**
 *
 *
 * OpenAPI spec version: 20190531
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/bds/ListBdsMetastoreConfigurations.ts.html |here} to see how to use ListBdsMetastoreConfigurationsRequest.
 */
export interface ListBdsMetastoreConfigurationsRequest extends common.BaseRequest {
  /**
   * The OCID of the cluster.
   */
  "bdsInstanceId": string;
  /**
   * The type of the metastore in the metastore configuration
   */
  "metastoreType"?: string;
  /**
   * The OCID of the Data Catalog metastore in the metastore configuration
   */
  "metastoreId"?: string;
  /**
   * The lifecycle state of the metastore in the metastore configuration
   */
  "lifecycleState"?: string;
  /**
   * The ID of the API key that is associated with the external metastore in the metastore configuration
   */
  "bdsApiKeyId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListBdsMetastoreConfigurationsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListBdsMetastoreConfigurationsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
