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
 * The validation status of a specified endpoint.
 */
export interface EndpointResult {
  /**
   * The endpoint name.
   */
  "endpointName"?: string;
  /**
   * The endpoint URL.
   */
  "url"?: string;
  /**
   * The endpoint validation status.
   */
  "status"?: string;
  /**
   * The list of violations (if any).
   */
  "violations"?: Array<model.Violation>;
  /**
   * The resolved log endpoints based on the specified list endpoint response.
   */
  "logEndpoints"?: Array<string>;
}

export namespace EndpointResult {
  export function getJsonObj(obj: EndpointResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "violations": obj.violations
          ? obj.violations.map(item => {
              return model.Violation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EndpointResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "violations": obj.violations
          ? obj.violations.map(item => {
              return model.Violation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}