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
 * The resource type metadata is defined in machine friendly format.
 */
export interface SystemFormatResourceTypeMetadataDetails extends model.ResourceTypeMetadataDetails {
  /**
   * List of required properties for resource type.
   */
  "requiredProperties"?: Array<string>;
  /**
   * List of properties needed by the agent for monitoring the resource.
   * Valid only if resource type is OCI management agent based. When specified,
   * these properties are passed to the management agent during resource create or update.
   *
   */
  "agentProperties"?: Array<string>;
  /**
   * List of valid properties for resource type while creating the monitored resource.
   * If resources of this type specifies any other properties during create operation,
   * the operation will fail.
   *
   */
  "validPropertiesForCreate"?: Array<string>;
  /**
   * List of valid properties for resource type while updating the monitored resource.
   * If resources of this type specifies any other properties during update operation,
   * the operation will fail.
   *
   */
  "validPropertiesForUpdate"?: Array<string>;
  /**
   * List of property sets used to uniquely identify the resources.
   * This check is made during create or update of stack monitoring resource.
   * The resource has to pass unique check for each set in the list.
   * For example, database can have user, password and SID as one unique set.
   * Another unique set would be user, password and service name.
   *
   */
  "uniquePropertySets"?: Array<model.UniquePropertySet>;
  /**
   * List of valid values for the properties. This is useful when resource type wants to
   * restrict only certain values for some properties. For instance for 'osType' property,
   * supported values can be restricted to be either Linux or Windows.
   * Example: `{ \"osType\": [\"Linux\",\"Windows\",\"Solaris\"]}`
   *
   */
  "validPropertyValues"?: { [key: string]: Array<string> };

  "format": string;
}

export namespace SystemFormatResourceTypeMetadataDetails {
  export function getJsonObj(
    obj: SystemFormatResourceTypeMetadataDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceTypeMetadataDetails.getJsonObj(
            obj
          ) as SystemFormatResourceTypeMetadataDetails)),
      ...{
        "uniquePropertySets": obj.uniquePropertySets
          ? obj.uniquePropertySets.map(item => {
              return model.UniquePropertySet.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const format = "SYSTEM_FORMAT";
  export function getDeserializedJsonObj(
    obj: SystemFormatResourceTypeMetadataDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceTypeMetadataDetails.getDeserializedJsonObj(
            obj
          ) as SystemFormatResourceTypeMetadataDetails)),
      ...{
        "uniquePropertySets": obj.uniquePropertySets
          ? obj.uniquePropertySets.map(item => {
              return model.UniquePropertySet.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}