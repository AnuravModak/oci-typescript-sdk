/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new MySQL Connection.
 *
 */
export interface CreateMysqlConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The MySQL technology type.
   */
  "technologyType": string;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must
   * already exist and be available for use by the database.  It must conform to the security
   * requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username": string;
  /**
   * The password Oracle GoldenGate uses to connect the associated RDBMS.  It must conform to the
   * specific security requirements implemented by the database including length, case
   * sensitivity, and so on.
   *
   */
  "password": string;
  /**
   * The name or address of a host.
   *
   */
  "host"?: string;
  /**
   * The port of an endpoint usually specified for a connection.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The name of the database.
   *
   */
  "databaseName": string;
  /**
   * Security Type for MySQL.
   */
  "securityProtocol": string;
  /**
   * SSL modes for MySQL.
   */
  "sslMode"?: string;
  /**
   * Database Certificate - The base64 encoded content of mysql.pem file
   * containing the server public key (for 1 and 2-way SSL).
   *
   */
  "sslCa"?: string;
  /**
   * Certificates revoked by certificate authorities (CA).
   * Server certificate must not be on this list (for 1 and 2-way SSL).
   * Note: This is an optional and that too only applicable if TLS/MTLS option is selected.
   *
   */
  "sslCrl"?: string;
  /**
   * Client Certificate - The base64 encoded content of client-cert.pem file
   * containing the client public key (for 2-way SSL).
   *
   */
  "sslCert"?: string;
  /**
   * Client Key - The client-key.pem containing the client private key (for 2-way SSL).
   *
   */
  "sslKey"?: string;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;
  /**
   * An array of name-value pair attribute entries.
   * Used as additional parameters in connection string.
   *
   */
  "additionalAttributes"?: Array<model.NameValuePair>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database system being referenced.
   *
   */
  "dbSystemId"?: string;

  "connectionType": string;
}

export namespace CreateMysqlConnectionDetails {
  export function getJsonObj(obj: CreateMysqlConnectionDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateMysqlConnectionDetails)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "MYSQL";
  export function getDeserializedJsonObj(
    obj: CreateMysqlConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateMysqlConnectionDetails)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
