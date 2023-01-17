/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * Description of an attachments for this instance
 */
export interface AttachmentDetails {
  /**
   * The role of the target attachment.
   *    * `PARENT` - The target instance is the parent of this attachment.
   *    * `CHILD` - The target instance is the child of this attachment.
   *
   */
  "targetRole": AttachmentDetails.TargetRole;
  /**
   * * If role == `PARENT`, the attached instance was created by this service instance
   * * If role == `CHILD`, this instance was created from attached instance on behalf of a user
   *
   */
  "isImplicit": boolean;
  /**
   * The OCID of the target instance (which could be any other OCI PaaS/SaaS resource), to which this instance is attached.
   */
  "targetId": string;
  /**
   * The dataplane instance URL of the attached instance
   */
  "targetInstanceUrl": string;
  /**
   * The type of the target instance, such as \"FUSION\".
   */
  "targetServiceType": string;
}

export namespace AttachmentDetails {
  export enum TargetRole {
    Parent = "PARENT",
    Child = "CHILD",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AttachmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
