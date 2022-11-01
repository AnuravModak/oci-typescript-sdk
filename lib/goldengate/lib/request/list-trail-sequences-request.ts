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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/goldengate/ListTrailSequences.ts.html |here} to see how to use ListTrailSequencesRequest.
 */
export interface ListTrailSequencesRequest extends common.BaseRequest {
  /**
   * A unique Deployment identifier.
   *
   */
  "deploymentId": string;
  /**
   * A Trail File identifier
   *
   */
  "trailFileId": string;
  /**
   * A Trail Sequence identifier
   *
   */
  "trailSequenceId"?: string;
  /**
   * A filter to return only the resources that match the entire 'displayName' given.
   *
   */
  "displayName"?: string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
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
   * The field to sort by. Only one sort order can be provided. Default order for 'timeLastUpdated' is
   * descending.  Default order for 'displayName' is ascending. If no value is specified
   * displayName is the default.
   *
   */
  "sortBy"?: ListTrailSequencesRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrder;
}

export namespace ListTrailSequencesRequest {
  export enum SortBy {
    TimeLastUpdated = "timeLastUpdated",
    DisplayName = "displayName"
  }
}
