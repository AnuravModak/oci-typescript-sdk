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
 * Details about the Oracle GoldenGate Microservices. If an empty object is specified, the stored Golden Gate details will be removed.
 *
 */
export interface UpdateGoldenGateServiceDetails {
  "sourceDbCredentials"?: model.DatabaseCredentials;
  "sourceContainerDbCredentials"?: model.DatabaseCredentials;
  "targetDbCredentials"?: model.DatabaseCredentials;
  "settings"?: model.UpdateGoldenGateSettings;
}

export namespace UpdateGoldenGateServiceDetails {
  export function getJsonObj(obj: UpdateGoldenGateServiceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDbCredentials": obj.sourceDbCredentials
          ? model.DatabaseCredentials.getJsonObj(obj.sourceDbCredentials)
          : undefined,
        "sourceContainerDbCredentials": obj.sourceContainerDbCredentials
          ? model.DatabaseCredentials.getJsonObj(obj.sourceContainerDbCredentials)
          : undefined,
        "targetDbCredentials": obj.targetDbCredentials
          ? model.DatabaseCredentials.getJsonObj(obj.targetDbCredentials)
          : undefined,
        "settings": obj.settings
          ? model.UpdateGoldenGateSettings.getJsonObj(obj.settings)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateGoldenGateServiceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDbCredentials": obj.sourceDbCredentials
          ? model.DatabaseCredentials.getDeserializedJsonObj(obj.sourceDbCredentials)
          : undefined,
        "sourceContainerDbCredentials": obj.sourceContainerDbCredentials
          ? model.DatabaseCredentials.getDeserializedJsonObj(obj.sourceContainerDbCredentials)
          : undefined,
        "targetDbCredentials": obj.targetDbCredentials
          ? model.DatabaseCredentials.getDeserializedJsonObj(obj.targetDbCredentials)
          : undefined,
        "settings": obj.settings
          ? model.UpdateGoldenGateSettings.getDeserializedJsonObj(obj.settings)
          : undefined
      }
    };

    return jsonObj;
  }
}
