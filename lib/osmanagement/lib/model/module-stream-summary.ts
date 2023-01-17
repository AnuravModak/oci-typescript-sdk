/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Summary information pertaining to a module stream provided by a software source
 */
export interface ModuleStreamSummary {
  /**
   * The name of the module that contains the stream.
   *
   */
  "moduleName": string;
  /**
   * The name of the stream.
   *
   */
  "streamName": string;
  /**
   * The OCID of the software source that provides this module stream.
   */
  "softwareSourceId"?: string;
}

export namespace ModuleStreamSummary {
  export function getJsonObj(obj: ModuleStreamSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModuleStreamSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
