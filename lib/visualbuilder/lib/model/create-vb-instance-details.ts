/**
 * Visual Builder API
 * Oracle Visual Builder enables developers to quickly build web and mobile applications. With a visual development environment that makes it easy to connect to Oracle data and third-party REST services, developers can build modern, consumer-grade applications in a fraction of the time it would take in other tools.
The Visual Builder Instance Management API allows users to create and manage a Visual Builder instance.

 * OpenAPI spec version: 20210601
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
 * The information about new VbInstance.
 */
export interface CreateVbInstanceDetails {
  /**
   * Vb Instance Identifier.
   */
  "displayName": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name,
   * type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to
   * namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Encrypted IDCS Open ID token. This is required for pre-UCPIS cloud accounts, but not UCPIS, hence not a required parameter
   */
  "idcsOpenId"?: string;
  /**
   * The number of Nodes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount": number;
  /**
   * Visual Builder is enabled or not.
   */
  "isVisualBuilderEnabled"?: boolean;
  "customEndpoint"?: model.CreateCustomEndpointDetails;
  /**
   * A list of alternate custom endpoints to be used for the vb instance URL
   * (contact Oracle for alternateCustomEndpoints availability for a specific instance).
   *
   */
  "alternateCustomEndpoints"?: Array<model.CreateCustomEndpointDetails>;
  /**
   * Optional parameter specifying which entitlement to use for billing purposes. Only required if the account possesses more than one entitlement.
   */
  "consumptionModel"?: CreateVbInstanceDetails.ConsumptionModel;
}

export namespace CreateVbInstanceDetails {
  export enum ConsumptionModel {
    Ucm = "UCM",
    Gov = "GOV",
    Vb4Saas = "VB4SAAS"
  }

  export function getJsonObj(obj: CreateVbInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customEndpoint": obj.customEndpoint
          ? model.CreateCustomEndpointDetails.getJsonObj(obj.customEndpoint)
          : undefined,
        "alternateCustomEndpoints": obj.alternateCustomEndpoints
          ? obj.alternateCustomEndpoints.map(item => {
              return model.CreateCustomEndpointDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateVbInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customEndpoint": obj.customEndpoint
          ? model.CreateCustomEndpointDetails.getDeserializedJsonObj(obj.customEndpoint)
          : undefined,
        "alternateCustomEndpoints": obj.alternateCustomEndpoints
          ? obj.alternateCustomEndpoints.map(item => {
              return model.CreateCustomEndpointDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
