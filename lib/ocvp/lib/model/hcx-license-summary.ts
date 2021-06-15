/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage your [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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
 * HCX on-premise license information summary.
 *
 */
export interface HcxLicenseSummary {
  /**
   * HCX on-premise license key value
   */
  "activationKey": string;
  /**
   * status of HCX on-premise license
   */
  "status": model.HcxLicenseStatus;
  /**
   * Name of the system that consumed the HCX on-premise license
   */
  "systemName"?: string;
}

export namespace HcxLicenseSummary {
  export function getJsonObj(obj: HcxLicenseSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}