/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about updating a monitored resource.
 */
export interface UpdateMonitoredResourceDetails {
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Host name of the monitored resource
   */
  "hostName"?: string;
  /**
   * Time zone in the form of tz database canonical zone ID.
   */
  "resourceTimeZone"?: string;
  /**
   * List of monitored resource properties
   */
  "properties"?: Array<model.MonitoredResourceProperty>;
  "databaseConnectionDetails"?: model.ConnectionDetails;
  "credentials"?:
    | model.PreExistingCredentials
    | model.EncryptedCredentials
    | model.PlainTextCredentials;
  "aliases"?: model.MonitoredResourceAliasCredential;
}

export namespace UpdateMonitoredResourceDetails {
  export function getJsonObj(obj: UpdateMonitoredResourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getJsonObj(item);
            })
          : undefined,
        "databaseConnectionDetails": obj.databaseConnectionDetails
          ? model.ConnectionDetails.getJsonObj(obj.databaseConnectionDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.MonitoredResourceCredential.getJsonObj(obj.credentials)
          : undefined,
        "aliases": obj.aliases
          ? model.MonitoredResourceAliasCredential.getJsonObj(obj.aliases)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMonitoredResourceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getDeserializedJsonObj(item);
            })
          : undefined,
        "databaseConnectionDetails": obj.databaseConnectionDetails
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.databaseConnectionDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.MonitoredResourceCredential.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "aliases": obj.aliases
          ? model.MonitoredResourceAliasCredential.getDeserializedJsonObj(obj.aliases)
          : undefined
      }
    };

    return jsonObj;
  }
}
