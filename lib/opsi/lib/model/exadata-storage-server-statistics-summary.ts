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
 * Storage server details and statistics.
 */
export interface ExadataStorageServerStatisticsSummary
  extends model.ExadataInsightResourceStatisticsAggregation {
  "resourceDetails": model.StorageServerDetails;
  "currentStatistics": model.ExadataInsightResourceStatistics;

  "exadataResourceType": string;
}

export namespace ExadataStorageServerStatisticsSummary {
  export function getJsonObj(
    obj: ExadataStorageServerStatisticsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataInsightResourceStatisticsAggregation.getJsonObj(
            obj
          ) as ExadataStorageServerStatisticsSummary)),
      ...{
        "resourceDetails": obj.resourceDetails
          ? model.StorageServerDetails.getJsonObj(obj.resourceDetails)
          : undefined,
        "currentStatistics": obj.currentStatistics
          ? model.ExadataInsightResourceStatistics.getJsonObj(obj.currentStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
  export const exadataResourceType = "STORAGE_SERVER";
  export function getDeserializedJsonObj(
    obj: ExadataStorageServerStatisticsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataInsightResourceStatisticsAggregation.getDeserializedJsonObj(
            obj
          ) as ExadataStorageServerStatisticsSummary)),
      ...{
        "resourceDetails": obj.resourceDetails
          ? model.StorageServerDetails.getDeserializedJsonObj(obj.resourceDetails)
          : undefined,
        "currentStatistics": obj.currentStatistics
          ? model.ExadataInsightResourceStatistics.getDeserializedJsonObj(obj.currentStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
}
