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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * User provides a password to be used to connect to the database.
 */
export interface TablespaceAdminPasswordCredentialDetails
  extends model.TablespaceAdminCredentialDetails {
  /**
   * The database user's password encoded using BASE64 scheme.
   */
  "password": string;

  "tablespaceAdminCredentialType": string;
}

export namespace TablespaceAdminPasswordCredentialDetails {
  export function getJsonObj(
    obj: TablespaceAdminPasswordCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TablespaceAdminCredentialDetails.getJsonObj(
            obj
          ) as TablespaceAdminPasswordCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const tablespaceAdminCredentialType = "PASSWORD";
  export function getDeserializedJsonObj(
    obj: TablespaceAdminPasswordCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TablespaceAdminCredentialDetails.getDeserializedJsonObj(
            obj
          ) as TablespaceAdminPasswordCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
}