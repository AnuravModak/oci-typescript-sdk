/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * A list of object locations in Object Storage.
 */
export interface ObjectListInlineInputLocation extends model.InputLocation {
  /**
   * The list of ObjectLocations.
   */
  "objectLocations": Array<model.ObjectLocation>;

  "sourceType": string;
}

export namespace ObjectListInlineInputLocation {
  export function getJsonObj(
    obj: ObjectListInlineInputLocation,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputLocation.getJsonObj(obj) as ObjectListInlineInputLocation)),
      ...{
        "objectLocations": obj.objectLocations
          ? obj.objectLocations.map(item => {
              return model.ObjectLocation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const sourceType = "OBJECT_LIST_INLINE_INPUT_LOCATION";
  export function getDeserializedJsonObj(
    obj: ObjectListInlineInputLocation,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputLocation.getDeserializedJsonObj(obj) as ObjectListInlineInputLocation)),
      ...{
        "objectLocations": obj.objectLocations
          ? obj.objectLocations.map(item => {
              return model.ObjectLocation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
