/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Description of a column
 */
export interface Column {
  /**
   * Name of the column displayed on UI.
   */
  "displayName": string;
  /**
   * Specifies the corresponding field name in the data source.
   */
  "fieldName": string;
  /**
   * Specifies the data type of the column.
   */
  "dataType"?: string;
  /**
   * Indicates if the column is hidden. Values can either be 'true' or 'false'.
   */
  "isHidden": boolean;
  /**
   * Specifies the display order of the column. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "displayOrder": number;
}

export namespace Column {
  export function getJsonObj(obj: Column): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Column): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
