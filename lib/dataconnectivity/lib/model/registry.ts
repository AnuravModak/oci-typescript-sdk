/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * A registry is an organizational construct to keep multiple data connectivity management solutions and their resources (data assets, data flows, tasks, and so on) separate from each other, helping you to stay organized. For example, you could have separate registries for development, testing, and production.
 */
export interface Registry {
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists only for cross-compatibility.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Registry description
   */
  "description"?: string;
  /**
   * Data Connectivity Management registry display name; registries can be renamed.
   */
  "displayName": string;
  /**
   * Name of the user who updated the DCMS registry.
   */
  "updatedBy"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId"?: string;
  /**
   * Time when the Data Connectivity Management registry was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time when the Data Connectivity Management registry was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Lifecycle states for registries in the Data Connectivity Management Service
   * CREATING - The resource is being created and may not be usable until the entire metadata is defined.
   * UPDATING - The resource is being updated and may not be usable until all changes are commited.
   * DELETING - The resource is being deleted and might require deep cleanup of children.
   * ACTIVE   - The resource is valid and available for access.
   * INACTIVE - The resource might be incomplete in its definition or might have been made unavailable for
   *          administrative reasons.
   * DELETED  - The resource has been deleted and isn't available.
   * FAILED   - The resource is in a failed state due to validation or other errors.
   *
   */
  "lifecycleState"?: Registry.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
  /**
   * A unique identifier that is immutable on creation.
   */
  "id": string;
}

export namespace Registry {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Registry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Registry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
