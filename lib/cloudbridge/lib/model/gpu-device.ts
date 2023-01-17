/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * GPU device details.
 */
export interface GpuDevice {
  /**
   * GPU device name.
   */
  "name"?: string;
  /**
   * GPU device description.
   */
  "description"?: string;
  /**
   * Number of GPU cores. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "coresCount"?: number;
  /**
   * GPU memory size in MBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInMBs"?: number;
  /**
   * The manufacturer of GPU.
   */
  "manufacturer"?: string;
}

export namespace GpuDevice {
  export function getJsonObj(obj: GpuDevice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GpuDevice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
