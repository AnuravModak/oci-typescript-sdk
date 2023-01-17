/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * Number of replicas of service components like Rest Proxy, CA and Console
 */
export interface ReplicaDetails {
  /**
   * Number of REST proxy replicas Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "proxyCount"?: number;
  /**
   * Number of CA replicas Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "caCount"?: number;
  /**
   * Number of console replicas Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "consoleCount"?: number;
}

export namespace ReplicaDetails {
  export function getJsonObj(obj: ReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicaDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
