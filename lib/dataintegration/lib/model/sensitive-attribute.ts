/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The sensitive attribute to be used for sensitive content (for password/wallet).
 */
export interface SensitiveAttribute {
  "secretConfig"?: model.OciVaultSecretConfig;
  /**
   * Attribute to provide sensitive content.
   */
  "value"?: string;
}

export namespace SensitiveAttribute {
  export function getJsonObj(obj: SensitiveAttribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "secretConfig": obj.secretConfig
          ? model.SecretConfig.getJsonObj(obj.secretConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveAttribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "secretConfig": obj.secretConfig
          ? model.SecretConfig.getDeserializedJsonObj(obj.secretConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
