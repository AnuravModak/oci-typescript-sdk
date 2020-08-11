/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details to create an Oracle Autonomous Database.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment of the Autonomous Database.
   */
  "compartmentId": string;
  /**
   * The database name. The name must begin with an alphabetic character and can contain a maximum of 14 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
   */
  "dbName": string;
  /**
   * The number of OCPU cores to be made available to the database.
   */
  "cpuCoreCount": number;
  /**
    * The Autonomous Database workload type. The following values are valid:
* <p>
- OLTP - indicates an Autonomous Transaction Processing database
* - DW - indicates an Autonomous Data Warehouse database
* - AJD - indicates an Autonomous JSON Database
* 
    */
  "dbWorkload"?: CreateAutonomousDatabaseBase.DbWorkload;
  /**
   * The size, in terabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed.
   *
   */
  "dataStorageSizeInTBs": number;
  /**
   * Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.
   *
   */
  "isFreeTier"?: boolean;
  /**
   * The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (\") or the username \"admin\", regardless of casing.
   */
  "adminPassword": string;
  /**
   * The user-friendly name for the Autonomous Database. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Database. Note that when provisioning an Autonomous Database on [dedicated Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adbddoverview.htm), this attribute must be null because the attribute is already set at the
   * Autonomous Exadata Infrastructure level. When using [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI), if a value is not specified, the system will supply the value of `BRING_YOUR_OWN_LICENSE`.
   *
   */
  "licenseModel"?: CreateAutonomousDatabaseBase.LicenseModel;
  /**
   * If set to `TRUE`, indicates that an Autonomous Database preview version is being provisioned, and that the preview version's terms of service have been accepted. Note that preview version software is only available for databases on [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI).
   *
   */
  "isPreviewVersionWithServiceTermsAccepted"?: boolean;
  /**
   * Indicates if auto scaling is enabled for the Autonomous Database OCPU core count. The default value is `FALSE`. Note that auto scaling is available for databases on [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI) only.
   *
   */
  "isAutoScalingEnabled"?: boolean;
  /**
   * True if the database is on [dedicated Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adbddoverview.htm).
   *
   */
  "isDedicated"?: boolean;
  /**
   * The Autonomous Container Database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "autonomousContainerDatabaseId"?: string;
  /**
   * The client IP access control list (ACL). This feature is available for databases on [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI) only.
   * Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance. This is an array of CIDR (Classless Inter-Domain Routing) notations for a subnet or VCN OCID.
   * To add the whitelist VCN specific subnet or IP, use a semicoln ';' as a deliminator to add the VCN specific subnets or IPs.
   * Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.aaaaaaaard2hfx2nn3e5xeo6j6o62jga44xjizkw\",\"ocid1.vcn.oc1.sea.aaaaaaaard2hfx2nn3e5xeo6j6o62jga44xjizkw;1.1.1.1\",\"ocid1.vcn.oc1.sea.aaaaaaaard2hfx2nn3e5xeo6j6o62jga44xjizkw;1.1.0.0/16\"]`
   *
   */
  "whitelistedIps"?: Array<string>;
  /**
   * Indicates whether the Autonomous Database has Data Guard enabled.
   */
  "isDataGuardEnabled"?: boolean;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the resource is associated with.
* <p>
**Subnet Restrictions:**
* - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
* - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.
* - For Autonomous Database, setting this will disable public secure access to the database.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and the backup subnet.
* 
    */
  "subnetId"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The private endpoint label for the resource. Setting this to an empty string, after the private endpoint database gets created, will change the same private endpoint database to the public endpoint database.
   */
  "privateEndpointLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A valid Oracle Database version for Autonomous Database.
   */
  "dbVersion"?: string;

  "source": string;
}

export namespace CreateAutonomousDatabaseBase {
  export enum DbWorkload {
    Oltp = "OLTP",
    Dw = "DW",
    Ajd = "AJD"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(obj: CreateAutonomousDatabaseBase): object {
    const jsonObj = { ...obj, ...{} };

    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "DATABASE":
          return model.CreateAutonomousDatabaseCloneDetails.getJsonObj(
            <model.CreateAutonomousDatabaseCloneDetails>(<object>jsonObj),
            true
          );
        case "BACKUP_FROM_ID":
          return model.CreateAutonomousDatabaseFromBackupDetails.getJsonObj(
            <model.CreateAutonomousDatabaseFromBackupDetails>(<object>jsonObj),
            true
          );
        case "BACKUP_FROM_TIMESTAMP":
          return model.CreateAutonomousDatabaseFromBackupTimestampDetails.getJsonObj(
            <model.CreateAutonomousDatabaseFromBackupTimestampDetails>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.CreateAutonomousDatabaseDetails.getJsonObj(
            <model.CreateAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}
