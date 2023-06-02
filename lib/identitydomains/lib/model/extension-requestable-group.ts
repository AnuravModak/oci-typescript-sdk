/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Requestable Group
 */
export interface ExtensionRequestableGroup {
  /**
   * Flag controlling whether group membership can be request by user through self service console.
   * <p>
   **Added In:** 17.3.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Requestable, mapsTo:requestable]]
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: boolean
   *  - uniqueness: none
   */
  "requestable"?: boolean;
}

export namespace ExtensionRequestableGroup {
  export function getJsonObj(obj: ExtensionRequestableGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionRequestableGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}