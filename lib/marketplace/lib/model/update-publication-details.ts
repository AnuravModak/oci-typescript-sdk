/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The updated details of the resource
 */
export interface UpdatePublicationDetails {
  /**
   * The name of the listing.
   */
  "name"?: string;
  /**
   * short description of the catalog listing
   */
  "shortDescription"?: string;
  /**
   * short description of the catalog listing
   */
  "longDescription"?: string;
  /**
   * Contact information to use to get support from the publisher for the listing.
   */
  "supportContacts"?: Array<model.SupportContact>;
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace UpdatePublicationDetails {
  export function getJsonObj(obj: UpdatePublicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}