/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The source of the command when imported from an Object Storage bucket.
 */
export interface InstanceAgentCommandSourceViaObjectStorageTupleDetails
  extends model.InstanceAgentCommandSourceDetails {
  /**
   * The Object Storage bucket for the command.
   */
  "bucketName": string;
  /**
   * The Object Storage namespace for the command.
   */
  "namespaceName": string;
  /**
   * The Object Storage object name for the command.
   */
  "objectName": string;

  "sourceType": string;
}

export namespace InstanceAgentCommandSourceViaObjectStorageTupleDetails {
  export function getJsonObj(
    obj: InstanceAgentCommandSourceViaObjectStorageTupleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceAgentCommandSourceDetails.getJsonObj(
            obj
          ) as InstanceAgentCommandSourceViaObjectStorageTupleDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "OBJECT_STORAGE_TUPLE";
}
