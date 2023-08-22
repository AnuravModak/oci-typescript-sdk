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
 * Defined tags to include in the discovery.
 *
 */
export interface GiDefinedTagsFilter extends model.GiFleetDiscoveryFilter {
  /**
   * Defined tags to include in the discovery.
   *
   */
  "tags": Array<model.DefinedTagFilterEntry>;
  /**
   * Type of join for each element in this filter.
   *
   */
  "operator"?: model.FleetDiscoveryOperators;

  "type": string;
}

export namespace GiDefinedTagsFilter {
  export function getJsonObj(obj: GiDefinedTagsFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GiFleetDiscoveryFilter.getJsonObj(obj) as GiDefinedTagsFilter)),
      ...{
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.DefinedTagFilterEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "DEFINED_TAG";
  export function getDeserializedJsonObj(
    obj: GiDefinedTagsFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GiFleetDiscoveryFilter.getDeserializedJsonObj(obj) as GiDefinedTagsFilter)),
      ...{
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.DefinedTagFilterEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}