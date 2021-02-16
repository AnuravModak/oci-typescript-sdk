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
 * The IORM configuration settings for the database.
 *
 */
export interface DbIormConfig {
  /**
   * The database name. For the default `DbPlan`, the `dbName` is `default`.
   *
   */
  "dbName"?: string;
  /**
   * The relative priority of this database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "share"?: number;
  /**
   * The flash cache limit for this database. This value is internally configured based on the share value assigned to the database.
   *
   */
  "flashCacheLimit"?: string;
}

export namespace DbIormConfig {
  export function getJsonObj(obj: DbIormConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
