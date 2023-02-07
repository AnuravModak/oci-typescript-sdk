/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Traffic router target for an ingress gateway.
 */
export interface VirtualServiceTrafficRuleTargetDetails extends model.TrafficRuleTargetDetails {
  /**
   * The OCID of the virtual service where the request will be routed.
   */
  "virtualServiceId": string;
  /**
   * The port on the virtual service to target.
   * Mandatory if the virtual deployments are listening on multiple ports.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Weight of traffic target. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weight"?: number;

  "type": string;
}

export namespace VirtualServiceTrafficRuleTargetDetails {
  export function getJsonObj(
    obj: VirtualServiceTrafficRuleTargetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TrafficRuleTargetDetails.getJsonObj(
            obj
          ) as VirtualServiceTrafficRuleTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VIRTUAL_SERVICE";
  export function getDeserializedJsonObj(
    obj: VirtualServiceTrafficRuleTargetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TrafficRuleTargetDetails.getDeserializedJsonObj(
            obj
          ) as VirtualServiceTrafficRuleTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
}