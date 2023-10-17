/**
 * Redis Service API
 * Use the Redis Service API to create and manage Redis clusters. A Redis cluster is a memory-based storage solution. For more information, see [OCI Caching Service with Redis](/iaas/Content/redis/home.htm).
 * OpenAPI spec version: 20220315
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
 * The details of each node in the Redis cluster.
 */
export interface Node {
  /**
   * The fully qualified domain name (FQDN) of the API endpoint to access a specific node.
   */
  "privateEndpointFqdn": string;
  /**
   * The private IP address of the API endpoint to access a specific node.
   */
  "privateEndpointIpAddress": string;
  /**
   * A user-friendly name of a Redis cluster node.
   */
  "displayName": string;
}

export namespace Node {
  export function getJsonObj(obj: Node): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Node): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
