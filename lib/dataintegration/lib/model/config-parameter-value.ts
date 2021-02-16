/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Contains the parameter configuration values.
 */
export interface ConfigParameterValue {
  /**
   * A string value of the parameter.
   */
  "stringValue"?: string;
  /**
   * An integer value of the parameter. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "intValue"?: number;
  /**
   * The root object reference value.
   */
  "refValue"?: any;
  /**
   * Reference to the parameter by its key.
   */
  "parameterValue"?: string;
}

export namespace ConfigParameterValue {
  export function getJsonObj(obj: ConfigParameterValue): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
