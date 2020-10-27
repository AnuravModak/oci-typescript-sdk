/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Parameters that a resource category supports.
 */
export interface Parameter {
  /**
   * Parameter name.
   */
  "name": string;
  /**
   * Parameter type. One of integer, string, boolean.
   */
  "type": Parameter.Type;
  /**
   * Java regex pattern to validate a parameter value.
   */
  "pattern"?: string;
}

export namespace Parameter {
  export enum Type {
    Integer = "integer",
    String = "string",
    Boolean = "boolean",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Parameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}