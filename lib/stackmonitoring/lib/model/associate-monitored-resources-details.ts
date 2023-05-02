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
 * The information required to create new monitored resource association.
 */
export interface AssociateMonitoredResourcesDetails {
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId": string;
  /**
   * Association type to be created between source and destination resources.
   *
   */
  "associationType": string;
  /**
   * Source Monitored Resource Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "sourceResourceId": string;
  /**
   * Destination Monitored Resource Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "destinationResourceId": string;
}

export namespace AssociateMonitoredResourcesDetails {
  export function getJsonObj(obj: AssociateMonitoredResourcesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociateMonitoredResourcesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
