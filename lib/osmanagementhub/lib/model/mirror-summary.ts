/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).
Use the table of contents and search tool to explore the  OS Management Hub API.

 * OpenAPI spec version: 20220901
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
 * Summary of a Mirror
 */
export interface MirrorSummary {
  /**
   * OCID of a software source
   */
  "id": string;
  /**
   * Display name of the mirror
   */
  "displayName"?: string;
  /**
   * Type of the mirror
   */
  "type"?: model.MirrorType;
  /**
   * The OS family the Software Source belongs to
   */
  "osFamily"?: model.OsFamily;
  /**
   * The architecture type supported by the Software Source
   */
  "archType"?: model.ArchType;
  /**
   * Current state of the mirror
   */
  "state": model.MirrorState;
  /**
   * A decimal number representing the completness percentage Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentage": number;
  /**
   * Timestamp of the last time the mirror was sync
   */
  "timeLastSynced": Date;
  /**
   * The current log from the management station plugin.
   */
  "log": string;
}

export namespace MirrorSummary {
  export function getJsonObj(obj: MirrorSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MirrorSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}