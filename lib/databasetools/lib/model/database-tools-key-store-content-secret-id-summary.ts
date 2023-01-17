/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The key store content.
 */
export interface DatabaseToolsKeyStoreContentSecretIdSummary
  extends model.DatabaseToolsKeyStoreContentSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the secret containing the key store.
   */
  "secretId"?: string;

  "valueType": string;
}

export namespace DatabaseToolsKeyStoreContentSecretIdSummary {
  export function getJsonObj(
    obj: DatabaseToolsKeyStoreContentSecretIdSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsKeyStoreContentSummary.getJsonObj(
            obj
          ) as DatabaseToolsKeyStoreContentSecretIdSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const valueType = "SECRETID";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsKeyStoreContentSecretIdSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsKeyStoreContentSummary.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsKeyStoreContentSecretIdSummary)),
      ...{}
    };

    return jsonObj;
  }
}
