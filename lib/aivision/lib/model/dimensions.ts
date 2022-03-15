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
 * Width and height of a page.
 */
export interface Dimensions {
  /**
   * Width of a page. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "width": number;
  /**
   * Height of a page. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "height": number;
  /**
   * Unit of length.
   */
  "unit": Dimensions.Unit;
}

export namespace Dimensions {
  export enum Unit {
    Pixel = "PIXEL",
    Inch = "INCH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Dimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Dimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}