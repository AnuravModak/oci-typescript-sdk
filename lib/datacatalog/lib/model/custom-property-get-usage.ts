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
 * Details of a single custom property
 */
export interface CustomPropertyGetUsage {
  /**
   * Unique Identifier of the attribute which is ID
   */
  "key"?: string;
  /**
   * Display name of the custom property
   */
  "displayName"?: string;
  /**
   * Description of the custom property
   */
  "description"?: string;
  /**
   * The custom property value
   */
  "value"?: string;
  /**
   * The data type of the custom property
   */
  "dataType"?: model.CustomPropertyDataType;
  /**
   * Namespace name of the custom property
   */
  "namespaceName"?: string;
  /**
   * Unique namespace key that is immutable
   */
  "namespaceKey"?: string;
  /**
   * If this field allows multiple values to be set
   */
  "isMultiValued"?: boolean;
  /**
   * If this field is a hidden field
   */
  "isHidden"?: boolean;
  /**
   * If this field is a editable field
   */
  "isEditable"?: boolean;
  /**
   * If this field is displayed in a list view of applicable objects.
   */
  "isShownInList"?: boolean;
  /**
   * If an OCI Event will be emitted when the custom property is modified.
   */
  "isEventEnabled"?: boolean;
  /**
   * Is this property allowed to have list of values
   */
  "isListType"?: boolean;
  /**
   * Allowed values for the custom property if any
   */
  "allowedValues"?: Array<string>;
}

export namespace CustomPropertyGetUsage {
  export function getJsonObj(obj: CustomPropertyGetUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomPropertyGetUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
