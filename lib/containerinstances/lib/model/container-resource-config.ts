/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The resource configuration for a Container. The resource configuration determines
 * the guaranteed resources allocated to the container and the maximum allowed resources for a container.
 *
 */
export interface ContainerResourceConfig {
  /**
   * The maximum amount of CPU utilization which may be consumed by the Container's
   * process. If no value is provided, then the process may consume
   * all CPU resources on the Instance.
   * CPU usage is defined in terms of logical CPUs. This means that the
   * maximum possible value on an E3 ContainerInstance with 1 OCPU is 2.0.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vcpusLimit"?: number;
  /**
   * The maximum amount of memory which may be consumed by the Container's
   * process. If no value is provided, then the process
   * may use all available memory on the Instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryLimitInGBs"?: number;
}

export namespace ContainerResourceConfig {
  export function getJsonObj(obj: ContainerResourceConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerResourceConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}