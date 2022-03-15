/**
 * VisionService API
 * A description of the VisionService API.
 * OpenAPI spec version: 20220125
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
 * Dataset that resides in OCI Object Storage.
 */
export interface ObjectStorageDataset extends model.Dataset {
  /**
   * The namespace name of the Object Storage bucket that contains the input data file.
   */
  "namespaceName"?: string;
  /**
   * The name of the Object Storage bucket that contains the input data file.
   */
  "bucketName"?: string;
  /**
   * The object name of the input data file.
   */
  "objectName"?: string;

  "datasetType": string;
}

export namespace ObjectStorageDataset {
  export function getJsonObj(obj: ObjectStorageDataset, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Dataset.getJsonObj(obj) as ObjectStorageDataset)),
      ...{}
    };

    return jsonObj;
  }
  export const datasetType = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageDataset,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Dataset.getDeserializedJsonObj(obj) as ObjectStorageDataset)),
      ...{}
    };

    return jsonObj;
  }
}