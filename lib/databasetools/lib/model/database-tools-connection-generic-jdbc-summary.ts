/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * DatabaseToolsConnectionSummary of a Generic JDBC database system.
 */
export interface DatabaseToolsConnectionGenericJdbcSummary
  extends model.DatabaseToolsConnectionSummary {
  /**
   * The JDBC URL used to connect to the Generic JDBC database system.
   */
  "url": string;
  /**
   * The user name.
   */
  "userName"?: string;
  "userPassword"?: model.DatabaseToolsUserPasswordSecretIdSummary;
  /**
   * The advanced connection properties key-value pair.
   */
  "advancedProperties"?: { [key: string]: string };
  /**
   * The CA certificate to verify the server's certificate and
   * the client private key and associated certificate required for client authentication.
   *
   */
  "keyStores"?: Array<model.DatabaseToolsKeyStoreGenericJdbcSummary>;

  "type": string;
}

export namespace DatabaseToolsConnectionGenericJdbcSummary {
  export function getJsonObj(
    obj: DatabaseToolsConnectionGenericJdbcSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnectionSummary.getJsonObj(
            obj
          ) as DatabaseToolsConnectionGenericJdbcSummary)),
      ...{
        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordSummary.getJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreGenericJdbcSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "GENERIC_JDBC";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsConnectionGenericJdbcSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnectionSummary.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsConnectionGenericJdbcSummary)),
      ...{
        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordSummary.getDeserializedJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreGenericJdbcSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}