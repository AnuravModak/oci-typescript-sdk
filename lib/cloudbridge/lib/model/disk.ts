/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * The assets disk.
 */
export interface Disk {
  /**
   * Disk name.
   */
  "name"?: string;
  /**
   * Order of boot volumes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bootOrder"?: number;
  /**
   * Disk UUID for the virtual disk, if available.
   */
  "uuid"?: string;
  /**
   * Disk UUID LUN for the virtual disk, if available.
   */
  "uuidLun"?: string;
  /**
   * The size of the volume in MBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInMBs"?: number;
  /**
   * Location of the boot/data volume.
   */
  "location"?: string;
  /**
   * The disk persistent mode.
   */
  "persistentMode"?: string;
}

export namespace Disk {
  export function getJsonObj(obj: Disk): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Disk): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
