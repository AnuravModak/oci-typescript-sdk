/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Description of Agent.
 */
export interface Agent {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Agent identifier, can be renamed.
   */
  "displayName": string;
  /**
   * Compartment identifier.
   */
  "compartmentId": string;
  /**
   * Type of the Agent.
   */
  "agentType": Agent.AgentType;
  /**
   * Agent identifier.
   */
  "agentVersion": string;
  /**
   * OS version.
   */
  "osVersion": string;
  /**
   * The time when the Agent was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when the Agent was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The time when the last heartbeat of the Agent was noted. An RFC3339 formatted datetime string.
   */
  "timeLastSyncReceived"?: Date;
  /**
   * The current heartbeat status of the Agent based on its timeLastSyncReceived value.
   */
  "heartBeatStatus"?: Agent.HeartBeatStatus;
  /**
   * Environment identifier.
   */
  "environmentId": string;
  /**
   * Resource principal public key.
   */
  "agentPubKey"?: string;
  /**
   * The time since epoch for when the public key will expire. An RFC3339 formatted datetime string.
   */
  "timeExpireAgentKeyInMs"?: Date;
  /**
   * The current state of the Agent.
   */
  "lifecycleState": Agent.LifecycleState;
  /**
   * A message describing the current state of the Agent in more detail. For example, it can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * List of plugins associated with the agent.
   */
  "pluginList"?: Array<model.PluginSummary>;
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
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Agent {
  export enum AgentType {
    Appliance = "APPLIANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum HeartBeatStatus {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Failed = "FAILED",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Agent): object {
    const jsonObj = {
      ...obj,
      ...{
        "pluginList": obj.pluginList
          ? obj.pluginList.map(item => {
              return model.PluginSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Agent): object {
    const jsonObj = {
      ...obj,
      ...{
        "pluginList": obj.pluginList
          ? obj.pluginList.map(item => {
              return model.PluginSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
