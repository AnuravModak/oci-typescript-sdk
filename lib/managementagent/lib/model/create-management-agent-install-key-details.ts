/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * The information about new Management Agent install Key.
 */
export interface CreateManagementAgentInstallKeyDetails {
  /**
   * Management Agent install Key Name
   */
  "displayName": string;
  /**
   * Total number of install for this keys Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "allowedKeyInstallCount"?: number;
  /**
   * date after which key would expire after creation
   */
  "timeExpires"?: Date;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
}

export namespace CreateManagementAgentInstallKeyDetails {
  export function getJsonObj(obj: CreateManagementAgentInstallKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
