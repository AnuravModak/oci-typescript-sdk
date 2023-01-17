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
 * The operation object.
 */
export interface OperationFromProcedure extends model.Operation {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The model version of the object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "shape"?: model.Shape;
  /**
   * The operation name.
   */
  "name"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The external key of the object.
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

export namespace OperationFromProcedure {
  export function getJsonObj(obj: OperationFromProcedure, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operation.getJsonObj(obj) as OperationFromProcedure)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "shape": obj.shape ? model.Shape.getJsonObj(obj.shape) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "PROCEDURE";
  export function getDeserializedJsonObj(
    obj: OperationFromProcedure,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Operation.getDeserializedJsonObj(obj) as OperationFromProcedure)),
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "shape": obj.shape ? model.Shape.getDeserializedJsonObj(obj.shape) : undefined
      }
    };

    return jsonObj;
  }
}
