/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Properties used to configure MACsec (if capable).
 */
export interface CreateMacsecProperties {
  /**
   * Indicates whether or not MACsec is enabled.
   */
  "state": model.MacsecState;
  "primaryKey"?: model.CreateMacsecKey;
  /**
   * Type of encryption cipher suite to use for the MACsec connection.
   */
  "encryptionCipher"?: model.MacsecEncryptionCipher;
}

export namespace CreateMacsecProperties {
  export function getJsonObj(obj: CreateMacsecProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "primaryKey": obj.primaryKey ? model.CreateMacsecKey.getJsonObj(obj.primaryKey) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMacsecProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "primaryKey": obj.primaryKey
          ? model.CreateMacsecKey.getDeserializedJsonObj(obj.primaryKey)
          : undefined
      }
    };

    return jsonObj;
  }
}