/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties that are required to create a new Digital Assistant by cloning an existing Digital Assistant.
 */
export interface CloneDigitalAssistantDetails extends model.CreateDigitalAssistantDetails {
  /**
   * The unique identifier of the Digital Assistant to clone.
   */
  "id": string;
  /**
   * The reource's name. The name can contain only letters, numbers, periods, and underscores. The name must begin with a letter.
   *
   */
  "name": string;
  /**
   * The resource's display name.
   *
   */
  "displayName": string;
  /**
   * The resource's version. The version can only contain numbers, letters, periods, underscores, dashes or spaces.  The version must begin with a letter or a number.
   *
   */
  "version"?: string;

  "kind": string;
}

export namespace CloneDigitalAssistantDetails {
  export function getJsonObj(obj: CloneDigitalAssistantDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDigitalAssistantDetails.getJsonObj(obj) as CloneDigitalAssistantDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "CLONE";
  export function getDeserializedJsonObj(
    obj: CloneDigitalAssistantDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDigitalAssistantDetails.getDeserializedJsonObj(
            obj
          ) as CloneDigitalAssistantDetails)),
      ...{}
    };

    return jsonObj;
  }
}
