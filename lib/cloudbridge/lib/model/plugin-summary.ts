/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Summary of the plugin in an Agent.
 */
export interface PluginSummary {
  /**
   * Plugin identifier, which can be renamed.
   */
  "name": string;
  /**
   * Agent identifier.
   */
  "agentId": string;
  /**
   * Plugin version.
   */
  "pluginVersion": string;
  /**
   * The time when the plugin was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when the plugin was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the plugin.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, it can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace/scope. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
}

export namespace PluginSummary {
  export function getJsonObj(obj: PluginSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PluginSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
