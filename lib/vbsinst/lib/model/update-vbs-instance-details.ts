/**
 * VbsControlplaneInstance API
 * A description of the VbsControlplaneInstance API
 * OpenAPI spec version: 20180828
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
 * The information to be updated.
 */
export interface UpdateVbsInstanceDetails {
  /**
   * Display Name
   */
  "displayName": string;
  /**
   * Whether VBS is authorized to create and use resources in the customer tenancy
   */
  "isResourceUsageAgreementGranted"?: boolean;
  /**
   * Compartment where VBS may create additional resources for the service instance
   */
  "resourceCompartmentId"?: string;
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
}

export namespace UpdateVbsInstanceDetails {
  export function getJsonObj(obj: UpdateVbsInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVbsInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}