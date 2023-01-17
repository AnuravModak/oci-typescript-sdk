/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Defines the routing actions taken for traffic that is forwarded.
 */
export interface ForwardedRoutingAction extends model.RoutingAction {
  "forwardedRoutingActionDetails"?: model.ForwardedRoutingActionDetails;

  "action": string;
}

export namespace ForwardedRoutingAction {
  export function getJsonObj(obj: ForwardedRoutingAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.RoutingAction.getJsonObj(obj) as ForwardedRoutingAction)),
      ...{
        "forwardedRoutingActionDetails": obj.forwardedRoutingActionDetails
          ? model.ForwardedRoutingActionDetails.getJsonObj(obj.forwardedRoutingActionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const action = "FORWARDED";
  export function getDeserializedJsonObj(
    obj: ForwardedRoutingAction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RoutingAction.getDeserializedJsonObj(obj) as ForwardedRoutingAction)),
      ...{
        "forwardedRoutingActionDetails": obj.forwardedRoutingActionDetails
          ? model.ForwardedRoutingActionDetails.getDeserializedJsonObj(
              obj.forwardedRoutingActionDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
