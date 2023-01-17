/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Represents an association of an entity to a term.
 */
export interface EntityTag {
  /**
   * The unique key of the parent entity.
   */
  "entityKey"?: string;
  /**
   * Unique tag key that is immutable.
   */
  "key": string;
  /**
   * Name of the tag which matches the term name.
   */
  "name"?: string;
  /**
   * Unique key of the related term.
   */
  "termKey"?: string;
  /**
   * Path of the related term.
   */
  "termPath"?: string;
  /**
   * Description of the related term.
   */
  "termDescription"?: string;
  /**
   * The current state of the tag.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the tag was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * OCID of the user who created the tag.
   */
  "createdById"?: string;
  /**
   * URI to the tag instance in the API.
   */
  "uri"?: string;
}

export namespace EntityTag {
  export function getJsonObj(obj: EntityTag): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityTag): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
