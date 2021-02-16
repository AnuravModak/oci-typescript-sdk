/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 * Details for the notebook session configuration.
 */
export interface NotebookSessionConfigurationDetails {
  /**
   * The shape used to launch the notebook session compute instance.  The list of available shapes in a given compartment can be retrieved from the `ListNotebookSessionShapes` endpoint.
   *
   */
  "shape": string;
  /**
   * A notebook session instance is provided with a block storage volume. This specifies the size of the volume in GBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockStorageSizeInGBs"?: number;
  /**
   * A notebook session instance is provided with a VNIC for network access.  This specifies the [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the subnet to create a VNIC in.  The subnet should be in a VCN with a NAT gateway for egress to the internet.
   *
   */
  "subnetId": string;
}

export namespace NotebookSessionConfigurationDetails {
  export function getJsonObj(obj: NotebookSessionConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
