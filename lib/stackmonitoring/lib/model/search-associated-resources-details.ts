/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The criteria for searching associated monitored resources.
 */
export interface SearchAssociatedResourcesDetails {
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * A filter to return associated resources that match resources of type.
   * Either resourceId or resourceType should be provided.
   *
   */
  "resourceType"?: string;
  /**
   * Monitored resource identifier for which the associated resources should be fetched.
   * Either resourceId or resourceType should be provided.
   *
   */
  "resourceId"?: string;
  /**
   * The field which determines the depth of hierarchy while searching for associated resources.
   * Possible values - 0 for all levels. And positive number to indicate different levels.
   * Default value is 1, which indicates 1st level associations.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "limitLevel"?: number;
  /**
   * List of association types to be searched for finding associated resources
   */
  "associationTypes"?: Array<string>;
}

export namespace SearchAssociatedResourcesDetails {
  export function getJsonObj(obj: SearchAssociatedResourcesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SearchAssociatedResourcesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}