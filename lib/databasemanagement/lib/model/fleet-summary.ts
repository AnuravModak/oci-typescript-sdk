/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * A summary of the inventory count grouped by database type and subtype, and the metrics that
 * describe the aggregated usage of CPU, storage, and so on of all the databases in the fleet.
 *
 */
export interface FleetSummary {
  /**
   * A list of databases present in the fleet and their usage metrics.
   */
  "aggregatedMetrics"?: Array<model.FleetMetricSummaryDefinition>;
  /**
   * A list of the databases in the fleet, grouped by database type and subtype.
   */
  "inventory"?: Array<model.FleetStatusByCategory>;
}

export namespace FleetSummary {
  export function getJsonObj(obj: FleetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregatedMetrics": obj.aggregatedMetrics
          ? obj.aggregatedMetrics.map(item => {
              return model.FleetMetricSummaryDefinition.getJsonObj(item);
            })
          : undefined,
        "inventory": obj.inventory
          ? obj.inventory.map(item => {
              return model.FleetStatusByCategory.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregatedMetrics": obj.aggregatedMetrics
          ? obj.aggregatedMetrics.map(item => {
              return model.FleetMetricSummaryDefinition.getDeserializedJsonObj(item);
            })
          : undefined,
        "inventory": obj.inventory
          ? obj.inventory.map(item => {
              return model.FleetStatusByCategory.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
