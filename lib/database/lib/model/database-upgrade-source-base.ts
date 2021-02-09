/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for the database upgrade source.
 *
 */
export interface DatabaseUpgradeSourceBase {
  /**
   * Additional upgrade options supported by DBUA(Database Upgrade Assistant).
   * Example: \"-upgradeTimezone false -keepEvents\"
   *
   */
  "options"?: string;

  "source": string;
}

export namespace DatabaseUpgradeSourceBase {
  export function getJsonObj(obj: DatabaseUpgradeSourceBase): object {
    const jsonObj = { ...obj, ...{} };

    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "DB_HOME":
          return model.DatabaseUpgradeWithDbHomeDetails.getJsonObj(
            <model.DatabaseUpgradeWithDbHomeDetails>(<object>jsonObj),
            true
          );
        case "DB_SOFTWARE_IMAGE":
          return model.DatabaseUpgradeWithDatabaseSoftwareImageDetails.getJsonObj(
            <model.DatabaseUpgradeWithDatabaseSoftwareImageDetails>(<object>jsonObj),
            true
          );
        case "DB_VERSION":
          return model.DatabaseUpgradeWithDbVersionDetails.getJsonObj(
            <model.DatabaseUpgradeWithDbVersionDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}
