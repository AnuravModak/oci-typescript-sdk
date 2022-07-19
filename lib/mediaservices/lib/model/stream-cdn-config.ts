/**
 * Media Services
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and Media Streams [Media Streams](/iaas/Content/dms-mediastream/home.htm).

Use the table of contents and search tool to explore the Media Flow API and Media Streams API.

 * OpenAPI spec version: 20211101
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
 * Configuration used for integrating with a CDN.
 */
export interface StreamCdnConfig {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The CDN Configuration identifier or display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Distribution Channel Identifier.
   */
  "distributionChannelId": string;
  /**
   * Whether publishing to CDN is enabled.
   */
  "isEnabled": boolean;
  "config": model.AkamaiManualStreamCdnConfig | model.EdgeStreamCdnConfig;
  /**
   * The time when the CDN Config was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time when the CDN Config was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the CDN Configuration.
   */
  "lifecycleState"?: StreamCdnConfig.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecyleDetails"?: string;
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

export namespace StreamCdnConfig {
  export enum LifecycleState {
    Active = "ACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: StreamCdnConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "config": obj.config ? model.StreamCdnConfigSection.getJsonObj(obj.config) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StreamCdnConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "config": obj.config
          ? model.StreamCdnConfigSection.getDeserializedJsonObj(obj.config)
          : undefined
      }
    };

    return jsonObj;
  }
}