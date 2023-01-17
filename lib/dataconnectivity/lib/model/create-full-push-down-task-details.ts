/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The full pushdown task parameter.
 */
export interface CreateFullPushDownTaskDetails {
  /**
   * The type of FullPushDownTask.
   */
  "modelType": string;
  "source"?: model.Source;
  "target"?: model.Target;
}

export namespace CreateFullPushDownTaskDetails {
  export function getJsonObj(obj: CreateFullPushDownTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.Source.getJsonObj(obj.source) : undefined,
        "target": obj.target ? model.Target.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateFullPushDownTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.Source.getDeserializedJsonObj(obj.source) : undefined,
        "target": obj.target ? model.Target.getDeserializedJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
}
