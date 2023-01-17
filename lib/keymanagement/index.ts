/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as kmsmanagement_waiter from "./lib/kmsmanagement-waiter";
import * as kmsvault_waiter from "./lib/kmsvault-waiter";

export { models };
export { requests };
export { responses };
export import KmsCryptoClient = client.KmsCryptoClient;
export import KmsManagementClient = client.KmsManagementClient;
export import KmsManagementWaiter = kmsmanagement_waiter.KmsManagementWaiter;
export import KmsVaultClient = client.KmsVaultClient;
export import KmsVaultWaiter = kmsvault_waiter.KmsVaultWaiter;
