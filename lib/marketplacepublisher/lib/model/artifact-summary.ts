/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * The model for the artifact summary.
 */
export interface ArtifactSummary {
  /**
   * Unique identifier for the artifact.
   */
  "id": string;
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId": string;
  /**
   * The display name for the artifact.
   */
  "displayName": string;
  /**
   * Artifact Type for the artifact.
   */
  "artifactType": model.ArtifactTypeEnum;
  /**
   * The current state for the Artifact.
   */
  "lifecycleState": string;
  /**
   * The current status for the Artifact.
   */
  "status": string;
  /**
    * The date and time the artifact was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2023-03-27T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the artifact was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2023-03-27T21:10:29.600Z`
* 
    */
  "timeUpdated": Date;
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
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ArtifactSummary {
  export function getJsonObj(obj: ArtifactSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ArtifactSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
