/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * / Basic details about the source, import manifest and object storage bucket as well as object name of the archive that should be used during import
 */
export interface ImportSourceDetails extends model.SourceDetails {
  "manifest": model.ImportManifest;
  /**
   * the object storage namespace where the bucket and uploaded object resides
   */
  "namespace": string;
  /**
   * the bucket wherein the export archive exists in object storage
   */
  "bucket": string;
  /**
   * the name of the archive as it exists in object storage
   */
  "objectName": string;

  "type": string;
}

export namespace ImportSourceDetails {
  export function getJsonObj(obj: ImportSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SourceDetails.getJsonObj(obj) as ImportSourceDetails)),
      ...{
        "manifest": obj.manifest ? model.ImportManifest.getJsonObj(obj.manifest) : undefined
      }
    };

    return jsonObj;
  }
  export const type = "IMPORT";
  export function getDeserializedJsonObj(
    obj: ImportSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getDeserializedJsonObj(obj) as ImportSourceDetails)),
      ...{
        "manifest": obj.manifest
          ? model.ImportManifest.getDeserializedJsonObj(obj.manifest)
          : undefined
      }
    };

    return jsonObj;
  }
}
