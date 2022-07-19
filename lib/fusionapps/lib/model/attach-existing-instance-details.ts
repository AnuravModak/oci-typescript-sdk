/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Information about the service attachment.
 */
export interface AttachExistingInstanceDetails extends model.CreateServiceAttachmentDetails {
  /**
   * Type of the ServiceInstance being attached.
   */
  "serviceInstanceType"?: AttachExistingInstanceDetails.ServiceInstanceType;
  /**
   * The service instance OCID of the instance being attached
   */
  "instanceId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "action": string;
}

export namespace AttachExistingInstanceDetails {
  export enum ServiceInstanceType {
    IntegrationCloud = "INTEGRATION_CLOUD",
    AnalyticsWarehouse = "ANALYTICS_WAREHOUSE"
  }

  export function getJsonObj(
    obj: AttachExistingInstanceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateServiceAttachmentDetails.getJsonObj(obj) as AttachExistingInstanceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const action = "ATTACH_EXISTING_INSTANCE";
  export function getDeserializedJsonObj(
    obj: AttachExistingInstanceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateServiceAttachmentDetails.getDeserializedJsonObj(
            obj
          ) as AttachExistingInstanceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
