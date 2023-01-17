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
 * The `TypedObject` class is a base class for any model object that has a type.
 */
export interface TypedObject {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "configValues"?: model.ConfigValues;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Free form text without any restriction on the permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * A detailed description of the object.
   */
  "description"?: string;

  "modelType": string;
}

export namespace TypedObject {
  export function getJsonObj(obj: TypedObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "OUTPUT_PORT":
          return model.OutputPort.getJsonObj(<model.OutputPort>(<object>jsonObj), true);
        case "SHAPE":
          return model.Shape.getJsonObj(<model.Shape>(<object>jsonObj), true);
        case "SHAPE_FIELD":
          return model.ShapeField.getJsonObj(<model.ShapeField>(<object>jsonObj), true);
        case "INPUT_PORT":
          return model.InputPort.getJsonObj(<model.InputPort>(<object>jsonObj), true);
        case "PARAMETER":
          return model.Parameter.getJsonObj(<model.Parameter>(<object>jsonObj), true);
        case "NATIVE_SHAPE_FIELD":
          return model.NativeShapeField.getJsonObj(<model.NativeShapeField>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TypedObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "OUTPUT_PORT":
          return model.OutputPort.getDeserializedJsonObj(<model.OutputPort>(<object>jsonObj), true);
        case "SHAPE":
          return model.Shape.getDeserializedJsonObj(<model.Shape>(<object>jsonObj), true);
        case "SHAPE_FIELD":
          return model.ShapeField.getDeserializedJsonObj(<model.ShapeField>(<object>jsonObj), true);
        case "INPUT_PORT":
          return model.InputPort.getDeserializedJsonObj(<model.InputPort>(<object>jsonObj), true);
        case "PARAMETER":
          return model.Parameter.getDeserializedJsonObj(<model.Parameter>(<object>jsonObj), true);
        case "NATIVE_SHAPE_FIELD":
          return model.NativeShapeField.getDeserializedJsonObj(
            <model.NativeShapeField>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
