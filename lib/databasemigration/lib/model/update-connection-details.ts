/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Details to update in a Database Connection resource.
 *
 */
export interface UpdateConnectionDetails {
  /**
   * Database Connection display name identifier.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the cloud database.
   *
   */
  "databaseId"?: string;
  "connectDescriptor"?: model.UpdateConnectDescriptor;
  /**
   * This name is the distinguished name used while creating the certificate on target database. Not required for source container database connections.
   */
  "certificateTdn"?: string;
  /**
   * cwallet.sso containing containing the TCPS/SSL certificate; base64 encoded String. Not required for source container database connections.
   *
   */
  "tlsWallet"?: string;
  /**
   * keystore.jks file contents; base64 encoded String. Not required for source container database connections.
   *
   */
  "tlsKeystore"?: string;
  "sshDetails"?: model.UpdateSshDetails;
  "adminCredentials"?: model.UpdateAdminCredentials;
  "privateEndpoint"?: model.UpdatePrivateEndpoint;
  "vaultDetails"?: model.UpdateVaultDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of Network Security Group OCIDs used to define network access for Connections.
   *
   */
  "nsgIds"?: Array<string>;
}

export namespace UpdateConnectionDetails {
  export function getJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectDescriptor": obj.connectDescriptor
          ? model.UpdateConnectDescriptor.getJsonObj(obj.connectDescriptor)
          : undefined,

        "sshDetails": obj.sshDetails
          ? model.UpdateSshDetails.getJsonObj(obj.sshDetails)
          : undefined,
        "adminCredentials": obj.adminCredentials
          ? model.UpdateAdminCredentials.getJsonObj(obj.adminCredentials)
          : undefined,
        "privateEndpoint": obj.privateEndpoint
          ? model.UpdatePrivateEndpoint.getJsonObj(obj.privateEndpoint)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.UpdateVaultDetails.getJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "connectDescriptor": obj.connectDescriptor
          ? model.UpdateConnectDescriptor.getDeserializedJsonObj(obj.connectDescriptor)
          : undefined,

        "sshDetails": obj.sshDetails
          ? model.UpdateSshDetails.getDeserializedJsonObj(obj.sshDetails)
          : undefined,
        "adminCredentials": obj.adminCredentials
          ? model.UpdateAdminCredentials.getDeserializedJsonObj(obj.adminCredentials)
          : undefined,
        "privateEndpoint": obj.privateEndpoint
          ? model.UpdatePrivateEndpoint.getDeserializedJsonObj(obj.privateEndpoint)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.UpdateVaultDetails.getDeserializedJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
