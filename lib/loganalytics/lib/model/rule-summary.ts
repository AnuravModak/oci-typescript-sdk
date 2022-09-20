/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * A generic rule summary object - represents an ingest time rule or a scheduled task.
 *
 */
export interface RuleSummary {
  /**
   * The log analytics entity OCID. This ID is a reference used by log analytics features and it represents
   * a resource that is provisioned and managed by the customer on their premises or on the cloud.
   *
   */
  "id": string;
  /**
   * Description for this resource.
   *
   */
  "description"?: string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The date and time the resource was created, in the format defined by RFC3339.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the resource was last updated, in the format defined by RFC3339.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current state of the logging analytics rule.
   *
   */
  "lifecycleState"?: model.ConfigLifecycleState;
  /**
   * The kind of rule - either an ingest time rule or a scheduled task.
   *
   */
  "kind": model.RuleKind;
  /**
   * The ingest time rule or scheduled task display name.
   */
  "displayName": string;
  /**
   * A flag indicating whether or not the ingest time rule or scheduled task is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The most recent task execution status.
   */
  "lastExecutionStatus"?: RuleSummary.LastExecutionStatus;
  /**
   * The date and time the scheduled task last executed, in the format defined by RFC3339.
   */
  "timeLastExecuted"?: Date;
}

export namespace RuleSummary {
  export enum LastExecutionStatus {
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
