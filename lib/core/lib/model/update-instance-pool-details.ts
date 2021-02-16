/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * The data to update an instance pool.
 */
export interface UpdateInstancePoolDetails {
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the instance pool. Does not have to be unique, and it's
   * changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the instance configuration associated with the
   * instance pool.
   *
   */
  "instanceConfigurationId"?: string;
  /**
    * The placement configurations for the instance pool. Provide one placement configuration for
* each availability domain.
* <p>
To use the instance pool with a regional subnet, provide a placement configuration for
* each availability domain, and include the regional subnet in each placement
* configuration.
* 
    */
  "placementConfigurations"?: Array<model.UpdateInstancePoolPlacementConfigurationDetails>;
  /**
   * The number of instances that should be in the instance pool. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
}

export namespace UpdateInstancePoolDetails {
  export function getJsonObj(obj: UpdateInstancePoolDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "placementConfigurations": obj.placementConfigurations
          ? obj.placementConfigurations.map(item => {
              return model.UpdateInstancePoolPlacementConfigurationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
