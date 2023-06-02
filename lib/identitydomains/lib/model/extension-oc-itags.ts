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
 * OCI Tags.
 */
export interface ExtensionOCITags {
  /**
   * OCI Freeform Tags
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [key, value]
   *  - idcsSearchable: true
   *  - type: complex
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - multiValued: true
   */
  "freeformTags"?: Array<model.FreeformTags>;
  /**
   * OCI Defined Tags
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [namespace, key, value]
   *  - type: complex
   *  - idcsSearchable: true
   *  - required: false
   *  - mutability: readWrite
   *  - multiValued: true
   *  - returned: default
   */
  "definedTags"?: Array<model.DefinedTags>;
  /**
   * OCI Tag slug
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - type: binary
   *  - mutability: readOnly
   *  - returned: request
   */
  "tagSlug"?: any;
}

export namespace ExtensionOCITags {
  export function getJsonObj(obj: ExtensionOCITags): object {
    const jsonObj = {
      ...obj,
      ...{
        "freeformTags": obj.freeformTags
          ? obj.freeformTags.map(item => {
              return model.FreeformTags.getJsonObj(item);
            })
          : undefined,
        "definedTags": obj.definedTags
          ? obj.definedTags.map(item => {
              return model.DefinedTags.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionOCITags): object {
    const jsonObj = {
      ...obj,
      ...{
        "freeformTags": obj.freeformTags
          ? obj.freeformTags.map(item => {
              return model.FreeformTags.getDeserializedJsonObj(item);
            })
          : undefined,
        "definedTags": obj.definedTags
          ? obj.definedTags.map(item => {
              return model.DefinedTags.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}