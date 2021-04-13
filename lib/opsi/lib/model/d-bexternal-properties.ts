/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Configuration parameters defined for external databases.
 */
export interface DBExternalProperties extends model.DatabaseConfigurationMetricGroup {
  /**
   * Name of the database.
   */
  "name"?: string;
  /**
   * Archive log mode.
   */
  "logMode"?: string;
  /**
   * Indicates if it is a CDB or not. This would be 'yes' or 'no'.
   */
  "cdb"?: string;
  /**
   * Open mode information.
   */
  "openMode"?: string;
  /**
   * Current role of the database.
   */
  "databaseRole"?: string;
  /**
   * Data protection policy.
   */
  "guardStatus"?: string;
  /**
   * Platform name of the database, OS with architecture.
   */
  "platformName"?: string;
  /**
   * Type of control file.
   */
  "controlFileType"?: string;
  /**
   * Indicates whether switchover is allowed.
   */
  "switchoverStatus"?: string;
  /**
   * Creation time.
   */
  "created"?: Date;

  "metricName": string;
}

export namespace DBExternalProperties {
  export function getJsonObj(obj: DBExternalProperties, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationMetricGroup.getJsonObj(obj) as DBExternalProperties)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "DB_EXTERNAL_PROPERTIES";
}
