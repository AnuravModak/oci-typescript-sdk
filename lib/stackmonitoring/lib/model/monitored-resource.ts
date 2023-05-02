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
 * The response object for create monitored resource and get monitored resource operations.
 * This contains information about the monitored resource. Credentials and credential aliases attributes
 * will be returned as null due to security reasons.
 *
 */
export interface MonitoredResource {
  /**
   * Monitored resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "id": string;
  /**
   * Monitored resource name.
   */
  "name": string;
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Monitored Resource Type.
   *
   */
  "type": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId": string;
  /**
   * Tenancy Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "tenantId": string;
  /**
   * Monitored resource host name.
   */
  "hostName"?: string;
  /**
   * The external resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * External resource is any OCI resource which is not a Stack Monitoring service resource.
   * Currently supports only following resource types - Container database, non-container database,
   * pluggable database and OCI compute instance.
   *
   */
  "externalId"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * Time zone in the form of tz database canonical zone ID.
   */
  "resourceTimeZone"?: string;
  /**
   * The date and time when the monitored resource was created, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time when the monitored resource was last updated, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Lifecycle state of the monitored resource.
   */
  "lifecycleState"?: model.ResourceLifecycleState;
  /**
   * List of monitored resource properties.
   *
   */
  "properties"?: Array<model.MonitoredResourceProperty>;
  "databaseConnectionDetails"?: model.ConnectionDetails;
  "credentials"?:
    | model.PreExistingCredentials
    | model.EncryptedCredentials
    | model.PlainTextCredentials;
  "aliases"?: model.MonitoredResourceAliasCredential;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MonitoredResource {
  export function getJsonObj(obj: MonitoredResource): object {
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
  export function getDeserializedJsonObj(obj: MonitoredResource): object {
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
