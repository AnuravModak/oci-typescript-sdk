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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListPropertiesMetadata.ts.html |here} to see how to use ListPropertiesMetadataRequest.
 */
export interface ListPropertiesMetadataRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The property name used for filtering.
   *
   */
  "name"?: string;
  /**
   * The property display text used for filtering. Only properties matching the specified display
   * name or description will be returned.
   *
   */
  "displayText"?: string;
  /**
   * The level for which applicable properties are to be listed.
   *
   */
  "level"?: string;
  /**
   * The constraints that apply to the properties at a certain level.
   *
   */
  "constraints"?: string;
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
  "sortOrder"?: ListPropertiesMetadataRequest.SortOrder;
  /**
   * The attribute used to sort the returned properties
   */
  "sortBy"?: ListPropertiesMetadataRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListPropertiesMetadataRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "name",
    DisplayName = "displayName"
  }
}