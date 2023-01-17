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
 * Details for creating a database.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Home.
   */
  "dbHomeId": string;
  /**
   * A valid Oracle Database version. To get a list of supported versions, use the {@link #listDbVersions(ListDbVersionsRequest) listDbVersions} operation.
   */
  "dbVersion"?: string;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation.
   *
   */
  "kmsKeyVersionId"?: string;

  "source": string;
}

export namespace CreateDatabaseBase {
  export function getJsonObj(obj: CreateDatabaseBase): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "NONE":
          return model.CreateNewDatabaseDetails.getJsonObj(
            <model.CreateNewDatabaseDetails>(<object>jsonObj),
            true
          );
        case "DB_BACKUP":
          return model.CreateDatabaseFromBackup.getJsonObj(
            <model.CreateDatabaseFromBackup>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.source}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDatabaseBase): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "NONE":
          return model.CreateNewDatabaseDetails.getDeserializedJsonObj(
            <model.CreateNewDatabaseDetails>(<object>jsonObj),
            true
          );
        case "DB_BACKUP":
          return model.CreateDatabaseFromBackup.getDeserializedJsonObj(
            <model.CreateDatabaseFromBackup>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.source}`);
      }
    }
    return jsonObj;
  }
}
