/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The API operation summary object.
 */
export interface OperationSummaryFromApi extends model.OperationSummary {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The model version of the object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * The operation name.
   */
  "name"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * The resource name.
   */
  "resourceName"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow reference across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;

  "modelType": string;
}

export namespace OperationSummaryFromApi {
  export function getJsonObj(obj: OperationSummaryFromApi, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OperationSummary.getJsonObj(obj) as OperationSummaryFromApi)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "API";
  export function getDeserializedJsonObj(
    obj: OperationSummaryFromApi,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OperationSummary.getDeserializedJsonObj(obj) as OperationSummaryFromApi)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined
      }
    };

    return jsonObj;
  }
}
