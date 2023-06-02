/**
 * Functions Service API
 * API for the Functions service.

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
 * A policy required for this PBF execution.
 */
export interface PolicyDetails {
  /**
   * Policy required for PBF execution
   */
  "policy": string;
  /**
   * Details about why this policy is required and what it will be used for.
   */
  "description": string;
}

export namespace PolicyDetails {
  export function getJsonObj(obj: PolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}