/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of recommendation to be processed.
 *
 */
export interface ProcessRecommendationDetails {
  /**
   * Unique identifier of the recommendation.
   */
  "recommendationKey": string;
  /**
   * The status of a recommendation.
   */
  "recommendationStatus": model.RecommendationStatus;
  /**
   * A map of maps that contains additional properties which are specific to the associated objects.
   * Each associated object defines it's set of required and optional properties.
   * Example: `{
   *             \"DataEntity\": {
   *               \"parentId\": \"entityId\"
   *             },
   *             \"Term\": {
   *               \"parentId\": \"glossaryId\"
   *             }
   *           }`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace ProcessRecommendationDetails {
  export function getJsonObj(obj: ProcessRecommendationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProcessRecommendationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
