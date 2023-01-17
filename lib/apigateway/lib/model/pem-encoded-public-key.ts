/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * A PEM-encoded public key used for verifying the JWT signature.
 */
export interface PemEncodedPublicKey extends model.StaticPublicKey {
  /**
   * The content of the PEM-encoded public key.
   */
  "key": string;

  "format": string;
}

export namespace PemEncodedPublicKey {
  export function getJsonObj(obj: PemEncodedPublicKey, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.StaticPublicKey.getJsonObj(obj) as PemEncodedPublicKey)),
      ...{}
    };

    return jsonObj;
  }
  export const format = "PEM";
  export function getDeserializedJsonObj(
    obj: PemEncodedPublicKey,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StaticPublicKey.getDeserializedJsonObj(obj) as PemEncodedPublicKey)),
      ...{}
    };

    return jsonObj;
  }
}
