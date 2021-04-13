/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
 * 
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
 * Define the tracing configuration for a function.
 *
 */
export interface FunctionTraceConfig {
  /**
   * Define if tracing is enabled for the resource.
   *
   */
  "isEnabled"?: boolean;
}

export namespace FunctionTraceConfig {
  export function getJsonObj(obj: FunctionTraceConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
