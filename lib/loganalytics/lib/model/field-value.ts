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
 * Field value representing and entry in a list-of-values field.
 *
 */
export interface FieldValue {
  /**
   * Display representation of the field value.
   *
   */
  "displayValue"?: string;
  /**
   * Internal representation of the field value.
   *
   */
  "internalValue"?: any;
  /**
   * Denotes if this list-of-values value has been marked as deleted.
   *
   */
  "isDeleted"?: boolean;
}

export namespace FieldValue {
  export function getJsonObj(obj: FieldValue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FieldValue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
