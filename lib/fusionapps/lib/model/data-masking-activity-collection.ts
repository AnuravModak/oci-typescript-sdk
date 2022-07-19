/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Results of data masking activities on a given Fusion Environment.
 */
export interface DataMaskingActivityCollection {
  /**
   * A page of data masking activity objects.
   */
  "items": Array<model.DataMaskingActivitySummary>;
}

export namespace DataMaskingActivityCollection {
  export function getJsonObj(obj: DataMaskingActivityCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DataMaskingActivitySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataMaskingActivityCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DataMaskingActivitySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
