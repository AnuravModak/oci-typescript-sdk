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
 * The ASM instance connection string.
 *
 */
export interface AsmConnectionString {
  /**
   * The list of host names of the ASM instances.
   */
  "hosts": Array<string>;
  /**
   * The port used to connect to the ASM instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * The service name of the ASM instance.
   */
  "service": string;
  /**
   * The protocol used to connect to the ASM instance.
   */
  "protocol": AsmConnectionString.Protocol;
}

export namespace AsmConnectionString {
  export enum Protocol {
    Tcp = "TCP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AsmConnectionString): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AsmConnectionString): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}