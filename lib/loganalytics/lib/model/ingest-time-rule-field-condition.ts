/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

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
 * The field condition(s) to evaluate for an ingest time rule.
 */
export interface IngestTimeRuleFieldCondition extends model.IngestTimeRuleCondition {
  /**
   * The field name to be evaluated.
   */
  "fieldName": string;
  /**
   * The operator to be used for evaluating the field.
   */
  "fieldOperator": IngestTimeRuleFieldCondition.FieldOperator;
  /**
   * The field value to be evaluated.
   */
  "fieldValue": string;
  /**
   * Optional additional condition(s) to be evaluated.
   */
  "additionalConditions"?: Array<model.IngestTimeRuleAdditionalFieldCondition>;

  "kind": string;
}

export namespace IngestTimeRuleFieldCondition {
  export enum FieldOperator {
    Equal = "EQUAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IngestTimeRuleFieldCondition, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IngestTimeRuleCondition.getJsonObj(obj) as IngestTimeRuleFieldCondition)),
      ...{
        "additionalConditions": obj.additionalConditions
          ? obj.additionalConditions.map(item => {
              return model.IngestTimeRuleAdditionalFieldCondition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const kind = "FIELD";
  export function getDeserializedJsonObj(
    obj: IngestTimeRuleFieldCondition,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IngestTimeRuleCondition.getDeserializedJsonObj(
            obj
          ) as IngestTimeRuleFieldCondition)),
      ...{
        "additionalConditions": obj.additionalConditions
          ? obj.additionalConditions.map(item => {
              return model.IngestTimeRuleAdditionalFieldCondition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
