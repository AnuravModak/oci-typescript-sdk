/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of the new container database in which the converted pluggable database will be located.
 *
 */
export interface PdbConversionToNewDatabaseDetails extends model.ConvertToPdbTargetBase {
  /**
   * The database name. The name must begin with an alphabetic character and can contain a maximum of 8 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
   */
  "cdbName": string;
  /**
   * A strong password for SYS, SYSTEM, and the plugbable database ADMIN user of the container database after conversion. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numeric, and two special characters. The special characters must be _, \\#, or -.
   */
  "cdbAdminPassword": string;
  /**
   * A strong password for plugbable database ADMIN user of the container database after conversion. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numeric, and two special characters. The special characters must be _, \\#, or -.
   */
  "pdbAdminPassword"?: string;
  /**
   * The password to open the TDE wallet of the container database after conversion. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numeric, and two special characters. The special characters must be _, \\#, or -.
   */
  "cdbTdeWalletPassword"?: string;
  /**
   * The existing TDE wallet password of the non-container database.
   */
  "nonCdbTdeWalletPassword": string;
  /**
   * Additional container database parameters.
   * Example: \"_pdb_name_case_sensitive=true\"
   *
   */
  "additionalCdbParams"?: string;

  "target": string;
}

export namespace PdbConversionToNewDatabaseDetails {
  export function getJsonObj(
    obj: PdbConversionToNewDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConvertToPdbTargetBase.getJsonObj(obj) as PdbConversionToNewDatabaseDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const target = "NEW_DATABASE";
  export function getDeserializedJsonObj(
    obj: PdbConversionToNewDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConvertToPdbTargetBase.getDeserializedJsonObj(
            obj
          ) as PdbConversionToNewDatabaseDetails)),
      ...{}
    };

    return jsonObj;
  }
}
