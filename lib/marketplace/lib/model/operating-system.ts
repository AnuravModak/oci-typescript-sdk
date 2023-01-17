/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The operating system used by the listing.
 */
export interface OperatingSystem {
  /**
   * The name of the operating system.
   */
  "name"?: string;
}

export namespace OperatingSystem {
  export function getJsonObj(obj: OperatingSystem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperatingSystem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
