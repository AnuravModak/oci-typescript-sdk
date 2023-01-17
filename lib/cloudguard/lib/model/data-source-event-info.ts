/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Event info of a data source.
 */
export interface DataSourceEventInfo {
  "dataSourceFeedProvider": string;
}

export namespace DataSourceEventInfo {
  export function getJsonObj(obj: DataSourceEventInfo): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dataSourceFeedProvider" in obj && obj.dataSourceFeedProvider) {
      switch (obj.dataSourceFeedProvider) {
        case "LOGGINGQUERY":
          return model.LoggingEventInfo.getJsonObj(<model.LoggingEventInfo>(<object>jsonObj), true);
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.dataSourceFeedProvider}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataSourceEventInfo): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dataSourceFeedProvider" in obj && obj.dataSourceFeedProvider) {
      switch (obj.dataSourceFeedProvider) {
        case "LOGGINGQUERY":
          return model.LoggingEventInfo.getDeserializedJsonObj(
            <model.LoggingEventInfo>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.dataSourceFeedProvider}`);
      }
    }
    return jsonObj;
  }
}
