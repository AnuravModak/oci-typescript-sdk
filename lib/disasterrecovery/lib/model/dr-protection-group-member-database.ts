/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * Properties for a Database (DBCS) member of a DR Protection Group.
 *
 */
export interface DrProtectionGroupMemberDatabase extends model.DrProtectionGroupMember {
  /**
    * The ID of the vault secret where the database password is stored.
* <p>
Example: `ocid1.vaultsecret.oc1.phx.exampleocid1`
* 
    */
  "passwordVaultSecretId"?: string;

  "memberType": string;
}

export namespace DrProtectionGroupMemberDatabase {
  export function getJsonObj(
    obj: DrProtectionGroupMemberDatabase,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrProtectionGroupMember.getJsonObj(obj) as DrProtectionGroupMemberDatabase)),
      ...{}
    };

    return jsonObj;
  }
  export const memberType = "DATABASE";
  export function getDeserializedJsonObj(
    obj: DrProtectionGroupMemberDatabase,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrProtectionGroupMember.getDeserializedJsonObj(
            obj
          ) as DrProtectionGroupMemberDatabase)),
      ...{}
    };

    return jsonObj;
  }
}
