/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * Discriminator for namespaces in the compartment-specific list.
 *
 */
export interface MonitoringSourceNamespaceDetails {
  "kind": string;
}

export namespace MonitoringSourceNamespaceDetails {
  export function getJsonObj(obj: MonitoringSourceNamespaceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "selected":
          return model.MonitoringSourceSelectedNamespaceDetails.getJsonObj(
            <model.MonitoringSourceSelectedNamespaceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoringSourceNamespaceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "selected":
          return model.MonitoringSourceSelectedNamespaceDetails.getDeserializedJsonObj(
            <model.MonitoringSourceSelectedNamespaceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}
