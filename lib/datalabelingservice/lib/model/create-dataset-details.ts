/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * Parameters needed to create a new Dataset. A Dataset allows a user to describe the data source that provides the Records and how Annotations should be applied to the Records.
 */
export interface CreateDatasetDetails {
  /**
   * A user-friendly display name for the resource.
   */
  "displayName"?: string;
  /**
   * A user provided description of the dataset
   */
  "description"?: string;
  /**
   * The OCID of the compartment of the resource.
   */
  "compartmentId": string;
  /**
   * The annotation format name required for labeling records.
   */
  "annotationFormat": string;
  "datasetSourceDetails": model.ObjectStorageSourceDetails;
  "datasetFormatDetails":
    | model.ImageDatasetFormatDetails
    | model.DocumentDatasetFormatDetails
    | model.TextDatasetFormatDetails;
  "initialRecordGenerationConfiguration"?: model.InitialRecordGenerationConfiguration;
  "labelSet": model.LabelSet;
  /**
   * The labeling instructions for human labelers in rich text format
   */
  "labelingInstructions"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDatasetDetails {
  export function getJsonObj(obj: CreateDatasetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetSourceDetails": obj.datasetSourceDetails
          ? model.DatasetSourceDetails.getJsonObj(obj.datasetSourceDetails)
          : undefined,
        "datasetFormatDetails": obj.datasetFormatDetails
          ? model.DatasetFormatDetails.getJsonObj(obj.datasetFormatDetails)
          : undefined,
        "initialRecordGenerationConfiguration": obj.initialRecordGenerationConfiguration
          ? model.InitialRecordGenerationConfiguration.getJsonObj(
              obj.initialRecordGenerationConfiguration
            )
          : undefined,
        "labelSet": obj.labelSet ? model.LabelSet.getJsonObj(obj.labelSet) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDatasetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetSourceDetails": obj.datasetSourceDetails
          ? model.DatasetSourceDetails.getDeserializedJsonObj(obj.datasetSourceDetails)
          : undefined,
        "datasetFormatDetails": obj.datasetFormatDetails
          ? model.DatasetFormatDetails.getDeserializedJsonObj(obj.datasetFormatDetails)
          : undefined,
        "initialRecordGenerationConfiguration": obj.initialRecordGenerationConfiguration
          ? model.InitialRecordGenerationConfiguration.getDeserializedJsonObj(
              obj.initialRecordGenerationConfiguration
            )
          : undefined,
        "labelSet": obj.labelSet ? model.LabelSet.getDeserializedJsonObj(obj.labelSet) : undefined
      }
    };

    return jsonObj;
  }
}
