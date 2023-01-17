/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The OCID of the Secret provided by the user to retrieve the password to connect to the database.
 *
 */
export interface SqlTuningTaskSecretCredentialDetails extends model.SqlTuningTaskCredentialDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Secret
   * where the database password is stored.
   *
   */
  "passwordSecretId": string;

  "sqlTuningTaskCredentialType": string;
}

export namespace SqlTuningTaskSecretCredentialDetails {
  export function getJsonObj(
    obj: SqlTuningTaskSecretCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SqlTuningTaskCredentialDetails.getJsonObj(
            obj
          ) as SqlTuningTaskSecretCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sqlTuningTaskCredentialType = "SECRET";
  export function getDeserializedJsonObj(
    obj: SqlTuningTaskSecretCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SqlTuningTaskCredentialDetails.getDeserializedJsonObj(
            obj
          ) as SqlTuningTaskSecretCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
}
