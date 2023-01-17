/**
 * Vault Secret Retrieval API
 * Use the Secret Retrieval API to retrieve secrets and secret versions from vaults. For more information, see [Managing Secrets](/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20190301
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
 * The properties of the secret bundle. (Secret bundle version summary objects do not include the actual contents of the secret.)
 *
 */
export interface SecretBundleVersionSummary {
  /**
   * The OCID of the secret.
   */
  "secretId": string;
  /**
   * The time when the secret bundle was created.
   */
  "timeCreated"?: Date;
  /**
   * The version number of the secret. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionNumber": number;
  /**
   * The version name of the secret bundle, as provided when the secret was created or last rotated.
   *
   */
  "versionName"?: string;
  /**
   * An optional property indicating when to delete the secret version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * An optional property indicating when the secret version will expire, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfExpiry"?: Date;
  /**
   * A list of possible rotation states for the secret bundle.
   */
  "stages"?: Array<SecretBundleVersionSummary.Stages>;
}

export namespace SecretBundleVersionSummary {
  export enum Stages {
    Current = "CURRENT",
    Pending = "PENDING",
    Latest = "LATEST",
    Previous = "PREVIOUS",
    Deprecated = "DEPRECATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecretBundleVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecretBundleVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
