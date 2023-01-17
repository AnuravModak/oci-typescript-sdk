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
 * One fact of a list of facts associated to a MediaWorkflowJob that presents a point-in-time
 * snapshot of the resources, data and events that were composed to generate a runnable job.
 * This information will be used internally to trouble-shoot problematic workflows or jobs.
 *
 */
export interface MediaWorkflowJobFact {
  /**
   * Reference to the parent job.
   */
  "mediaWorkflowJobId": string;
  /**
   * System generated serial number to uniquely identify a detail in order within a MediaWorkflowJob. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "key": number;
  /**
   * Unique name. It is read-only and generated for the fact.
   */
  "name": string;
  /**
   * The type of information contained in this detail.
   */
  "type": string;
  /**
   * The body of the detail captured as JSON.
   */
  "detail": { [key: string]: any };
}

export namespace MediaWorkflowJobFact {
  export function getJsonObj(obj: MediaWorkflowJobFact): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MediaWorkflowJobFact): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
