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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/GetDataAssetTag.ts.html |here} to see how to use GetDataAssetTagRequest.
 */
export interface GetDataAssetTagRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey": string;
  /**
   * Unique tag key.
   */
  "tagKey": string;
  /**
   * Specifies the fields to return in a data asset tag response.
   *
   */
  "fields"?: Array<GetDataAssetTagRequest.Fields>;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace GetDataAssetTagRequest {
  export enum Fields {
    Key = "key",
    Name = "name",
    TermKey = "termKey",
    TermPath = "termPath",
    TermDescription = "termDescription",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    CreatedById = "createdById",
    Uri = "uri",
    DataAssetKey = "dataAssetKey"
  }
}
