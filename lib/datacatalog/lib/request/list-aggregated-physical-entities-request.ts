/**
 *
 *
 * OpenAPI spec version: 20190325
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/ListAggregatedPhysicalEntities.ts.html |here} to see how to use ListAggregatedPhysicalEntitiesRequest.
 */
export interface ListAggregatedPhysicalEntitiesRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey": string;
  /**
   * Unique entity key.
   */
  "entityKey": string;
  /**
   * Specifies the fields to return in an entity response.
   *
   */
  "fields"?: Array<ListAggregatedPhysicalEntitiesRequest.Fields>;
  /**
   * A filter to return only resources that match display name pattern given. The match is not case sensitive.
   * For Example : /folders?displayNameContains=Cu.*
   * The above would match all folders with display name that starts with \"Cu\" or has the pattern \"Cu\" anywhere in between.
   *
   */
  "displayNameContains"?: string;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListAggregatedPhysicalEntitiesRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListAggregatedPhysicalEntitiesRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * Indicates whether the properties map will be provided in the response.
   */
  "isIncludeProperties"?: boolean;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListAggregatedPhysicalEntitiesRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    DataAssetKey = "dataAssetKey",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    CreatedById = "createdById",
    UpdatedById = "updatedById",
    LifecycleState = "lifecycleState",
    ExternalKey = "externalKey",
    TimeExternal = "timeExternal",
    TimeStatusUpdated = "timeStatusUpdated",
    IsLogical = "isLogical",
    IsPartition = "isPartition",
    FolderKey = "folderKey",
    FolderName = "folderName",
    TypeKey = "typeKey",
    Path = "path",
    HarvestStatus = "harvestStatus",
    LastJobKey = "lastJobKey",
    Uri = "uri",
    Properties = "properties"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
