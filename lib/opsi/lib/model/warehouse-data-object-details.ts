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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Warehouse data object details.
 */
export interface WarehouseDataObjectDetails {
  "dataObjectType": string;
}

export namespace WarehouseDataObjectDetails {
  export function getJsonObj(obj: WarehouseDataObjectDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dataObjectType" in obj && obj.dataObjectType) {
      switch (obj.dataObjectType) {
        case "VIEW":
          return model.WarehouseViewDataObjectDetails.getJsonObj(
            <model.WarehouseViewDataObjectDetails>(<object>jsonObj),
            true
          );
        case "TABLE":
          return model.WarehouseTableDataObjectDetails.getJsonObj(
            <model.WarehouseTableDataObjectDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dataObjectType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WarehouseDataObjectDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dataObjectType" in obj && obj.dataObjectType) {
      switch (obj.dataObjectType) {
        case "VIEW":
          return model.WarehouseViewDataObjectDetails.getDeserializedJsonObj(
            <model.WarehouseViewDataObjectDetails>(<object>jsonObj),
            true
          );
        case "TABLE":
          return model.WarehouseTableDataObjectDetails.getDeserializedJsonObj(
            <model.WarehouseTableDataObjectDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dataObjectType}`);
      }
    }
    return jsonObj;
  }
}
