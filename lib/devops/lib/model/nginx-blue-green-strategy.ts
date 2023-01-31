/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the NGINX blue green release strategy.
 */
export interface NginxBlueGreenStrategy extends model.OkeBlueGreenStrategy {
  /**
   * Namespace A for deployment. Example: namespaceA - first Namespace name.
   */
  "namespaceA": string;
  /**
   * Namespace B for deployment. Example: namespaceB - second Namespace name.
   */
  "namespaceB": string;
  /**
   * Name of the Ingress resource.
   */
  "ingressName": string;

  "strategyType": string;
}

export namespace NginxBlueGreenStrategy {
  export function getJsonObj(obj: NginxBlueGreenStrategy, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OkeBlueGreenStrategy.getJsonObj(obj) as NginxBlueGreenStrategy)),
      ...{}
    };

    return jsonObj;
  }
  export const strategyType = "NGINX_BLUE_GREEN_STRATEGY";
  export function getDeserializedJsonObj(
    obj: NginxBlueGreenStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OkeBlueGreenStrategy.getDeserializedJsonObj(obj) as NginxBlueGreenStrategy)),
      ...{}
    };

    return jsonObj;
  }
}
