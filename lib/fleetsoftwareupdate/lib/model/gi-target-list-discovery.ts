/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Collection discovery conformed by the specified list of targets.
 *
 */
export interface GiTargetListDiscovery extends model.GiFleetDiscoveryDetails {
  /**
   * OCIDs of target resources to include.
   * For EXACC service type Collections only VMClusters are allowed.
   * For EXACS service type Collections only CloudVMClusters are allowed.
   *
   */
  "targets": Array<string>;

  "strategy": string;
}

export namespace GiTargetListDiscovery {
  export function getJsonObj(obj: GiTargetListDiscovery, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GiFleetDiscoveryDetails.getJsonObj(obj) as GiTargetListDiscovery)),
      ...{}
    };

    return jsonObj;
  }
  export const strategy = "TARGET_LIST";
  export function getDeserializedJsonObj(
    obj: GiTargetListDiscovery,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GiFleetDiscoveryDetails.getDeserializedJsonObj(obj) as GiTargetListDiscovery)),
      ...{}
    };

    return jsonObj;
  }
}