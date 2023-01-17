/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage HIGHLIGHTROWS command.
 *
 */
export interface HighlightRowsCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * User specified color to highlight matches with if found.
   *
   */
  "color"?: string;
  /**
   * List of terms or phrases to find to mark the result row as highlighted.
   *
   */
  "keywords"?: Array<string>;

  "name": string;
}

export namespace HighlightRowsCommandDescriptor {
  export function getJsonObj(
    obj: HighlightRowsCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as HighlightRowsCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
  export const name = "HIGHLIGHT_ROWS";
  export function getDeserializedJsonObj(
    obj: HighlightRowsCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(
            obj
          ) as HighlightRowsCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
}
