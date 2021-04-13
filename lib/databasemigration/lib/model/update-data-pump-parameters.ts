/**
 * REST API for Zero Downtime Migration (Oracle Database Migration Service --ODMS-- as customer-facing service name)
 * Provides users the ability to perform Zero Downtime migration operations
 * OpenAPI spec version: 20200720
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
 * Optional parameters for Datapump Export and Import. Refer to https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/ODMS_DATAPUMP.html#GUID-62324358-2F26-4A94-B69F-1075D53FA96D__BABDECJE
 * If an empty object is specified, the stored Data Pump Parameter details will be removed.
 *
 */
export interface UpdateDataPumpParameters {
  /**
   * False to force datapump worker process to run on one instance.
   *
   */
  "isCluster"?: boolean;
  /**
   * Estimate size of dumps that will be generated.
   *
   */
  "estimate"?: model.DataPumpEstimate;
  /**
   * IMPORT: Specifies the action to be performed when data is loaded into a preexisting table.
   *
   */
  "tableExistsAction"?: model.DataPumpTableExistsAction;
  /**
   * Exclude paratemers for export and import. If specified, the stored list will be replaced.
   *
   */
  "excludeParameters"?: Array<model.DataPumpExcludeParameters>;
  /**
   * Maximum number of worker processes that can be used for a Datapump Import job.
   * For an Autonomous Database, ODMS will automatically query its CPU core count and set this property.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "importParallelismDegree"?: number;
  /**
   * Maximum number of worker processes that can be used for a Datapump Export job.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "exportParallelismDegree"?: number;
}

export namespace UpdateDataPumpParameters {
  export function getJsonObj(obj: UpdateDataPumpParameters): object {
    const jsonObj = {
      ...obj,
      ...{
        "excludeParameters": obj.excludeParameters
          ? obj.excludeParameters.map(item => {
              return model.DataPumpExcludeParameters.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
