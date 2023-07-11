/**
 * OCI Control Center API
 * OCI Control Center (OCC) service enables you to monitor the region-level cloud consumption and provides the region-level capacity data, in realms where OCC is available. Use the OCI Control Center (OCC) API to explore region-level capacity and utilization information about core services. For more information, see [OCI Control Center](/iaas/Content/control-center/home.htm).

 * OpenAPI spec version: 20230515
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
 * The recorded metric value at a specific timestamp.
 *
 */
export interface SummarizedMetricData {
  /**
   * The time at which the metric data was recorded.
   *
   */
  "sampleTime"?: Date;
  /**
   * The duration over which the metric data is aggregated. Supported values: `1m`-`60m`, `1h`-`24h`, `1d`.
   *
   */
  "resolution"?: string;
  /**
   * Qualifiers provided in the definition of the returned metric. Available dimensions vary by metric namespace.
   *
   */
  "dimensions"?: { [key: string]: model.DimensionValue };
  /**
   * The aggregation method used for aggregating the metric values.  The aggregation method depends on the metric itself.
   *
   */
  "aggregationMethod"?: string;
  /**
   * The aggregated metric value for the specified request.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "aggregatedValue"?: number;
}

export namespace SummarizedMetricData {
  export function getJsonObj(obj: SummarizedMetricData): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? common.mapContainer(obj.dimensions, model.DimensionValue.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SummarizedMetricData): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? common.mapContainer(obj.dimensions, model.DimensionValue.getDeserializedJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}