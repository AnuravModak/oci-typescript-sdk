/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information to update for a DatabaseRegistration.
 *
 */
export interface UpdateDatabaseRegistrationDetails {
  /**
   * An object's Display Name.
   *
   */
  "displayName"?: string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Tags defined for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A three-label Fully Qualified Domain Name (FQDN) for a resource.
   *
   */
  "fqdn"?: string;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must already exist and be available for use by the database.  It must conform to the security requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username"?: string;
  /**
   * The password Oracle GoldenGate uses to connect the associated RDBMS.  It must conform to the specific security requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "password"?: string;
  /**
   * Connect descriptor or Easy Connect Naming method that Oracle GoldenGate uses to connect to a database.
   *
   */
  "connectionString"?: string;
  /**
   * The wallet contents Oracle GoldenGate uses to make connections to a database.  This attribute is expected to be base64 encoded.
   *
   */
  "wallet"?: string;
  /**
   * Credential store alias.
   *
   */
  "aliasName"?: string;
}

export namespace UpdateDatabaseRegistrationDetails {
  export function getJsonObj(obj: UpdateDatabaseRegistrationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}