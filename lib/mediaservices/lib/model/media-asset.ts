/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * Represents the metadata associated with an asset that has been either produced by or registered with Media Services.
 */
export interface MediaAsset {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The ID of the compartment containing the MediaAsset.
   */
  "compartmentId": string;
  /**
   * The ID of the MediaWorkflow used to produce this asset.
   */
  "sourceMediaWorkflowId"?: string;
  /**
   * The ID of the MediaWorkflowJob used to produce this asset.
   */
  "mediaWorkflowJobId"?: string;
  /**
   * The version of the MediaWorkflow used to produce this asset. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceMediaWorkflowVersion"?: number;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The time when the MediaAsset was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The current state of the MediaAsset.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The type of the media asset.
   */
  "type": model.AssetType;
  /**
   * The ID of the parent asset from which this asset is derived.
   */
  "parentMediaAssetId"?: string;
  /**
   * The ID of the senior most asset from which this asset is derived.
   */
  "masterMediaAssetId"?: string;
  /**
   * The name of the object storage bucket where this represented asset is located.
   */
  "bucketName"?: string;
  /**
   * The object storage namespace where this asset is located.
   */
  "namespaceName"?: string;
  /**
   * The object storage object name that identifies this asset.
   */
  "objectName"?: string;
  /**
   * eTag of the underlying object storage object.
   */
  "objectEtag"?: string;
  /**
   * The time when the MediaAsset was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The start index for video segment files. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "segmentRangeStartIndex"?: number;
  /**
   * The end index of video segment files. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "segmentRangeEndIndex"?: number;
  /**
   * List of Metadata.
   */
  "metadata"?: Array<model.Metadata>;
  /**
   * List of tags for the MediaAsset.
   */
  "mediaAssetTags"?: Array<model.MediaAssetTag>;
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MediaAsset {
  export function getJsonObj(obj: MediaAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? obj.metadata.map(item => {
              return model.Metadata.getJsonObj(item);
            })
          : undefined,
        "mediaAssetTags": obj.mediaAssetTags
          ? obj.mediaAssetTags.map(item => {
              return model.MediaAssetTag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MediaAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? obj.metadata.map(item => {
              return model.Metadata.getDeserializedJsonObj(item);
            })
          : undefined,
        "mediaAssetTags": obj.mediaAssetTags
          ? obj.mediaAssetTags.map(item => {
              return model.MediaAssetTag.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
