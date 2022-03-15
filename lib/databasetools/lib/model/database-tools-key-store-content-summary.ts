/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
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
 * The key store content.
 */
export interface DatabaseToolsKeyStoreContentSummary {
  "valueType": string;
}

export namespace DatabaseToolsKeyStoreContentSummary {
  export function getJsonObj(obj: DatabaseToolsKeyStoreContentSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "SECRETID":
          return model.DatabaseToolsKeyStoreContentSecretIdSummary.getJsonObj(
            <model.DatabaseToolsKeyStoreContentSecretIdSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStoreContentSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "SECRETID":
          return model.DatabaseToolsKeyStoreContentSecretIdSummary.getDeserializedJsonObj(
            <model.DatabaseToolsKeyStoreContentSecretIdSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
}