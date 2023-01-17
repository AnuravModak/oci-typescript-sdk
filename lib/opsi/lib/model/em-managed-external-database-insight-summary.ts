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
 * Summary of a database insight resource.
 */
export interface EmManagedExternalDatabaseInsightSummary extends model.DatabaseInsightSummary {
  /**
   * Enterprise Manager Unique Identifier
   */
  "enterpriseManagerIdentifier": string;
  /**
   * Enterprise Manager Entity Name
   */
  "enterpriseManagerEntityName": string;
  /**
   * Enterprise Manager Entity Type
   */
  "enterpriseManagerEntityType": string;
  /**
   * Enterprise Manager Entity Unique Identifier
   */
  "enterpriseManagerEntityIdentifier": string;
  /**
   * Enterprise Manager Entity Display Name
   */
  "enterpriseManagerEntityDisplayName"?: string;
  /**
   * OPSI Enterprise Manager Bridge OCID
   */
  "enterpriseManagerBridgeId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata insight.
   */
  "exadataInsightId"?: string;

  "entitySource": string;
}

export namespace EmManagedExternalDatabaseInsightSummary {
  export function getJsonObj(
    obj: EmManagedExternalDatabaseInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsightSummary.getJsonObj(
            obj
          ) as EmManagedExternalDatabaseInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "EM_MANAGED_EXTERNAL_DATABASE";
  export function getDeserializedJsonObj(
    obj: EmManagedExternalDatabaseInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsightSummary.getDeserializedJsonObj(
            obj
          ) as EmManagedExternalDatabaseInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
}
