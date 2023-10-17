/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Pluggable Database Node Level Details.
 */
export interface PluggableDatabaseNodeLevelDetails {
  /**
   * The Node name of the Database Instance.
   */
  "nodeName": string;
  /**
   * The mode that pluggable database is in. Open mode can only be changed to READ_ONLY or MIGRATE directly from the backend (within the Oracle Database software).
   *
   */
  "openMode": PluggableDatabaseNodeLevelDetails.OpenMode;
}

export namespace PluggableDatabaseNodeLevelDetails {
  export enum OpenMode {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE",
    Mounted = "MOUNTED",
    Migrate = "MIGRATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PluggableDatabaseNodeLevelDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PluggableDatabaseNodeLevelDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}