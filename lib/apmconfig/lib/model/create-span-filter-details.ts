/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
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
 * A named setting that specifies the filter criteria to match a subset of the spans.
 */
export interface CreateSpanFilterDetails extends model.CreateConfigDetails {
  /**
   * The name by which a configuration entity is displayed to the end user.
   */
  "displayName": string;
  /**
   * The string that defines the Span Filter expression.
   *
   */
  "filterText": string;
  /**
   * An optional string that describes what the filter is intended or used for.
   */
  "description"?: string;

  "configType": string;
}

export namespace CreateSpanFilterDetails {
  export function getJsonObj(obj: CreateSpanFilterDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigDetails.getJsonObj(obj) as CreateSpanFilterDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configType = "SPAN_FILTER";
  export function getDeserializedJsonObj(
    obj: CreateSpanFilterDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigDetails.getDeserializedJsonObj(obj) as CreateSpanFilterDetails)),
      ...{}
    };

    return jsonObj;
  }
}
