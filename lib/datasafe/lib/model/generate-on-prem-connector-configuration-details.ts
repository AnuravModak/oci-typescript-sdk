/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details used to create and download on-premises connector's configuration.
 */
export interface GenerateOnPremConnectorConfigurationDetails {
  /**
   * The password to encrypt the keys inside the wallet included as part of the configuration. The password must be between 12 and 30 characters long and must contain atleast 1 uppercase, 1 lowercase, 1 numeric, and 1 special character.
   */
  "password": string;
}

export namespace GenerateOnPremConnectorConfigurationDetails {
  export function getJsonObj(obj: GenerateOnPremConnectorConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateOnPremConnectorConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
