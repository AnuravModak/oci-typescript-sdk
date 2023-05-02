/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Encrypted credentials [indicated by the type property in CredentialStore].
 *
 */
export interface EncryptedCredentials extends model.MonitoredResourceCredential {
  /**
   * The master key should be created in OCI Vault owned by the client of this API.
   * The user should have permission to access the vault key.
   *
   */
  "keyId": string;
  /**
   * The credential properties list. Credential property values will be encrypted format.
   */
  "properties": Array<model.CredentialProperty>;

  "credentialType": string;
}

export namespace EncryptedCredentials {
  export function getJsonObj(obj: EncryptedCredentials, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitoredResourceCredential.getJsonObj(obj) as EncryptedCredentials)),
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.CredentialProperty.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const credentialType = "ENCRYPTED";
  export function getDeserializedJsonObj(
    obj: EncryptedCredentials,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitoredResourceCredential.getDeserializedJsonObj(obj) as EncryptedCredentials)),
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.CredentialProperty.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
