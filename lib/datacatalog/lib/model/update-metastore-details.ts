/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Information to be updated for an existing metastore.
 */
export interface UpdateMetastoreDetails {
  /**
   * Mutable name of the metastore.
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateMetastoreDetails {
  export function getJsonObj(obj: UpdateMetastoreDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMetastoreDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}