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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListSources.ts.html |here} to see how to use ListSourcesRequest.
 */
export interface ListSourcesRequest extends common.BaseRequest {
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
   * A filter to return only sources associated with entities of the specified type.
   * The match is case-insensitive.
   *
   */
  "entityType"?: string;
  /**
   * The source display text used for filtering.  Only sources with the specified name
   * or description will be returned.
   *
   */
  "sourceDisplayText"?: string;
  /**
   * The system value used for filtering.  Only items with the specified system value
   * will be returned.  Valid values are built in, custom (for user defined items), or
   * all (for all items, regardless of system value).
   *
   */
  "isSystem"?: ListSourcesRequest.IsSystem;
  /**
   * An auto-associate flag used for filtering.  Only sources which are marked for automatic
   * association will be returned.
   *
   */
  "isAutoAssociated"?: boolean;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListSourcesRequest.SortOrder;
  /**
   * The attribute used to sort the returned sources
   */
  "sortBy"?: ListSourcesRequest.SortBy;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * A filter to return only log analytics entities whose name matches the entire name given. The match
   * is case-insensitive.
   *
   */
  "name"?: string;
  /**
   * A comma-separated list of categories used for filtering
   */
  "categories"?: string;
  /**
   * A flag specifying whether or not to return all source information, or a subset of the
   * information about each source.  A value of true will return only the source unique
   * identifier and the source name.  A value of false will return all source information
   * (such as author, updated date, system flag, etc.)
   *
   */
  "isSimplified"?: boolean;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListSourcesRequest {
  export enum IsSystem {
    All = "ALL",
    Custom = "CUSTOM",
    BuiltIn = "BUILT_IN"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "name",
    TimeUpdated = "timeUpdated",
    AssociationCount = "associationCount",
    SourceType = "sourceType"
  }
}
