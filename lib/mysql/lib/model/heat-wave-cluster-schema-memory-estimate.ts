/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Schema with estimated memory footprints for each MySQL user table
 * of the schema when loaded to HeatWave cluster memory.
 *
 */
export interface HeatWaveClusterSchemaMemoryEstimate {
  /**
   * The name of the schema.
   */
  "schemaName": string;
  /**
   * Estimated memory footprints for MySQL user tables of the schema
   * when loaded to HeatWave cluster memory.
   *
   */
  "perTableEstimates": Array<model.HeatWaveClusterTableMemoryEstimate>;
}

export namespace HeatWaveClusterSchemaMemoryEstimate {
  export function getJsonObj(obj: HeatWaveClusterSchemaMemoryEstimate): object {
    const jsonObj = {
      ...obj,
      ...{
        "perTableEstimates": obj.perTableEstimates
          ? obj.perTableEstimates.map(item => {
              return model.HeatWaveClusterTableMemoryEstimate.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HeatWaveClusterSchemaMemoryEstimate): object {
    const jsonObj = {
      ...obj,
      ...{
        "perTableEstimates": obj.perTableEstimates
          ? obj.perTableEstimates.map(item => {
              return model.HeatWaveClusterTableMemoryEstimate.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
