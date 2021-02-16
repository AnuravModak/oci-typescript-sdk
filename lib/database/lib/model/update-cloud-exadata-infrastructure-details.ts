/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Updates the cloud Exadata infrastructure. Applies to Exadata Cloud Service instances only.
 *
 */
export interface UpdateCloudExadataInfrastructureDetails {
  /**
   * The user-friendly name for the cloud Exadata infrastructure. The name does not need to be unique.
   *
   */
  "displayName"?: string;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The number of compute servers for the cloud Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "computeCount"?: number;
  /**
   * The number of storage servers for the cloud Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageCount"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateCloudExadataInfrastructureDetails {
  export function getJsonObj(obj: UpdateCloudExadataInfrastructureDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
}
