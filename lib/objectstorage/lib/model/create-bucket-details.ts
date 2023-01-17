/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
 * talk to an administrator. If you are an administrator who needs to write policies to give users access, see
 * [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface CreateBucketDetails {
  /**
   * The name of the bucket. Valid characters are uppercase or lowercase letters, numbers, hyphens, underscores, and periods.
   * Bucket names must be unique within an Object Storage namespace. Avoid entering confidential information.
   * example: Example: my-new-bucket1
   *
   */
  "name": string;
  /**
   * The ID of the compartment in which to create the bucket.
   */
  "compartmentId": string;
  /**
   * Arbitrary string, up to 4KB, of keys and values for user-defined metadata.
   */
  "metadata"?: { [key: string]: string };
  /**
   * The type of public access enabled on this bucket.
   * A bucket is set to `NoPublicAccess` by default, which only allows an authenticated caller to access the
   * bucket and its contents. When `ObjectRead` is enabled on the bucket, public access is allowed for the
   * `GetObject`, `HeadObject`, and `ListObjects` operations. When `ObjectReadWithoutList` is enabled on the bucket,
   * public access is allowed for the `GetObject` and `HeadObject` operations.
   *
   */
  "publicAccessType"?: CreateBucketDetails.PublicAccessType;
  /**
   * The type of storage tier of this bucket.
   * A bucket is set to 'Standard' tier by default, which means the bucket will be put in the standard storage tier.
   * When 'Archive' tier type is set explicitly, the bucket is put in the Archive Storage tier. The 'storageTier'
   * property is immutable after bucket is created.
   *
   */
  "storageTier"?: CreateBucketDetails.StorageTier;
  /**
   * Whether or not events are emitted for object state changes in this bucket. By default, `objectEventsEnabled` is
   * set to `false`. Set `objectEventsEnabled` to `true` to emit events for object state changes. For more information
   * about events, see [Overview of Events](https://docs.cloud.oracle.com/Content/Events/Concepts/eventsoverview.htm).
   *
   */
  "objectEventsEnabled"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key
   * Management service to generate a data encryption key or to encrypt or decrypt a data encryption key.
   *
   */
  "kmsKeyId"?: string;
  /**
   * Set the versioning status on the bucket. By default, a bucket is created with versioning `Disabled`. Use this option to enable versioning during bucket creation. Objects in a version enabled bucket are protected from overwrites and deletions. Previous versions of the same object will be available in the bucket.
   *
   */
  "versioning"?: CreateBucketDetails.Versioning;
  /**
   * Set the auto tiering status on the bucket. By default, a bucket is created with auto tiering `Disabled`.
   * Use this option to enable auto tiering during bucket creation. Objects in a bucket with auto tiering set to
   * `InfrequentAccess` are transitioned automatically between the 'Standard' and 'InfrequentAccess'
   * tiers based on the access pattern of the objects.
   *
   */
  "autoTiering"?: string;
}

export namespace CreateBucketDetails {
  export enum PublicAccessType {
    NoPublicAccess = "NoPublicAccess",
    ObjectRead = "ObjectRead",
    ObjectReadWithoutList = "ObjectReadWithoutList"
  }

  export enum StorageTier {
    Standard = "Standard",
    Archive = "Archive"
  }

  export enum Versioning {
    Enabled = "Enabled",
    Disabled = "Disabled"
  }

  export function getJsonObj(obj: CreateBucketDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateBucketDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
