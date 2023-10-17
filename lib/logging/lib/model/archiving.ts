/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, and agent configurations.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * Log archiving configuration.
 */
export interface Archiving {
  /**
   * True if archiving enabled. This field is now deprecated, you should use Service Connector Hub to enable archiving.
   */
  "isEnabled"?: boolean;
}

export namespace Archiving {
  export function getJsonObj(obj: Archiving): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Archiving): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
