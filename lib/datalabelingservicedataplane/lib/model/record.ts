/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * A record represents an entry in a dataset that needs labeling.
 */
export interface Record {
  /**
   * The OCID of the record.
   */
  "id": string;
  /**
   * The name is created by the user. It is unique and immutable.
   */
  "name": string;
  /**
   * The date and time the resource was created, in the timestamp format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was updated, in the timestamp format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
   * The OCID of the dataset to associate the record with.
   */
  "datasetId": string;
  /**
   * The OCID of the compartment for the task.
   */
  "compartmentId": string;
  "sourceDetails": model.ObjectStorageSourceDetails;
  /**
   * Whether or not the record has been labeled and has associated annotations.
   */
  "isLabeled": boolean;
  /**
   * The lifecycle state of the record.
   * ACTIVE - The record is active and ready for labeling.
   * INACTIVE - The record has been marked as inactive and should not be used for labeling.
   * DELETED - The record has been deleted and is no longer available for labeling.
   *
   */
  "lifecycleState": Record.LifecycleState;
  /**
   * An integer value used in achieving concurrency control, this field will be used to generate eTags. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lifetimeLogicalClock": number;
  "recordMetadata"?: model.DocumentMetadata | model.ImageMetadata | model.TextMetadata;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Record {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Record): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "recordMetadata": obj.recordMetadata
          ? model.RecordMetadata.getJsonObj(obj.recordMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Record): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "recordMetadata": obj.recordMetadata
          ? model.RecordMetadata.getDeserializedJsonObj(obj.recordMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
