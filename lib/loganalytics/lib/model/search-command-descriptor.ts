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
 * Command descriptor for querylanguage SEARCH command.
 *
 */
export interface SearchCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * List of sub-queries present in search command if specified.
   *
   */
  "subQueries"?: Array<model.ParseQueryOutput>;

  "name": string;
}

export namespace SearchCommandDescriptor {
  export function getJsonObj(obj: SearchCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as SearchCommandDescriptor)),
      ...{
        "subQueries": obj.subQueries
          ? obj.subQueries.map(item => {
              return model.ParseQueryOutput.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const name = "SEARCH";
  export function getDeserializedJsonObj(
    obj: SearchCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(obj) as SearchCommandDescriptor)),
      ...{
        "subQueries": obj.subQueries
          ? obj.subQueries.map(item => {
              return model.ParseQueryOutput.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
