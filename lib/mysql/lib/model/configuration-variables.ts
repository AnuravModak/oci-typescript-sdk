/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * User controllable service variables.
 */
export interface ConfigurationVariables {
  /**
   * (\"completion_type\")
   */
  "completionType"?: ConfigurationVariables.CompletionType;
  /**
   * (\"default_authentication_plugin\")
   */
  "defaultAuthenticationPlugin"?: ConfigurationVariables.DefaultAuthenticationPlugin;
  /**
   * (\"transaction_isolation\")
   */
  "transactionIsolation"?: ConfigurationVariables.TransactionIsolation;
  /**
   * (\"innodb_ft_server_stopword_table\")
   */
  "innodbFtServerStopwordTable"?: string;
  /**
   * (\"mandatory_roles\")
   */
  "mandatoryRoles"?: string;
  /**
   * (\"autocommit\")
   */
  "autocommit"?: boolean;
  /**
   * (\"foreign_key_checks\")
   */
  "foreignKeyChecks"?: boolean;
  /**
   * (\"innodb_ft_enable_stopword\")
   */
  "innodbFtEnableStopword"?: boolean;
  /**
   * (\"local_infile\")
   */
  "localInfile"?: boolean;
  /**
   * (\"mysql_firewall_mode\")
   */
  "mysqlFirewallMode"?: boolean;
  /**
   * (\"mysqlx_enable_hello_notice\") DEPRECATED -- variable should not be settable and will be ignored
   */
  "mysqlxEnableHelloNotice"?: boolean;
  /**
   * (\"sql_require_primary_key\")
   */
  "sqlRequirePrimaryKey"?: boolean;
  /**
   * (\"sql_warnings\")
   */
  "sqlWarnings"?: boolean;
  /**
   * (\"binlog_expire_logs_seconds\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "binlogExpireLogsSeconds"?: number;
  /**
   * (\"innodb_buffer_pool_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbBufferPoolSize"?: number;
  /**
   * (\"innodb_ft_result_cache_limit\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtResultCacheLimit"?: number;
  /**
   * (\"max_connections\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxConnections"?: number;
  /**
   * (\"max_prepared_stmt_count\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxPreparedStmtCount"?: number;
  /**
   * (\"connect_timeout\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectTimeout"?: number;
  /**
   * (\"cte_max_recursion_depth\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cteMaxRecursionDepth"?: number;
  /**
   * (\"generated_random_password_length\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "generatedRandomPasswordLength"?: number;
  /**
   * (\"information_schema_stats_expiry\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "informationSchemaStatsExpiry"?: number;
  /**
   * (\"innodb_buffer_pool_instances\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbBufferPoolInstances"?: number;
  /**
   * (\"innodb_ft_max_token_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtMaxTokenSize"?: number;
  /**
   * (\"innodb_ft_min_token_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtMinTokenSize"?: number;
  /**
   * (\"innodb_ft_num_word_optimize\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbFtNumWordOptimize"?: number;
  /**
   * (\"innodb_lock_wait_timeout\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbLockWaitTimeout"?: number;
  /**
   * (\"innodb_max_purge_lag\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbMaxPurgeLag"?: number;
  /**
   * (\"innodb_max_purge_lag_delay\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "innodbMaxPurgeLagDelay"?: number;
  /**
   * (\"max_execution_time\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxExecutionTime"?: number;
  /**
   * (\"mysqlx_connect_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxConnectTimeout"?: number;
  /**
   * (\"mysqlx_document_id_unique_prefix\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxDocumentIdUniquePrefix"?: number;
  /**
   * (\"mysqlx_idle_worker_thread_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxIdleWorkerThreadTimeout"?: number;
  /**
   * (\"mysqlx_interactive_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxInteractiveTimeout"?: number;
  /**
   * (\"mysqlx_max_allowed_packet\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxMaxAllowedPacket"?: number;
  /**
   * (\"mysqlx_min_worker_threads\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxMinWorkerThreads"?: number;
  /**
   * (\"mysqlx_read_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxReadTimeout"?: number;
  /**
   * (\"mysqlx_wait_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxWaitTimeout"?: number;
  /**
   * (\"mysqlx_write_timeout\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxWriteTimeout"?: number;
  /**
   * (\"parser_max_mem_size\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserMaxMemSize"?: number;
  /**
   * (\"query_alloc_block_size\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryAllocBlockSize"?: number;
  /**
   * (\"query_prealloc_size\") DEPRECATED -- variable should not be settable and will be ignored Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "queryPreallocSize"?: number;
  /**
   * (\"sql_mode\")
   */
  "sqlMode"?: string;
  /**
   * Set the default compression level for the deflate algorithm. (\"mysqlx_deflate_default_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxDeflateDefaultCompressionLevel"?: number;
  /**
   * Limit the upper bound of accepted compression levels for the deflate algorithm. (\"mysqlx_deflate_max_client_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxDeflateMaxClientCompressionLevel"?: number;
  /**
   * Limit the upper bound of accepted compression levels for the lz4 algorithm. (\"mysqlx_lz4_max_client_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxLz4MaxClientCompressionLevel"?: number;
  /**
   * Set the default compression level for the lz4 algorithm. (\"mysqlx_lz4_default_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxLz4DefaultCompressionLevel"?: number;
  /**
   * Limit the upper bound of accepted compression levels for the zstd algorithm. (\"mysqlx_zstd_max_client_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxZstdMaxClientCompressionLevel"?: number;
  /**
   * Set the default compression level for the zstd algorithm. (\"mysqlx_zstd_default_compression_level\") Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlxZstdDefaultCompressionLevel"?: number;
  /**
   * DEPRECATED -- typo of mysqlx_zstd_default_compression_level. variable will be ignored. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mysqlZstdDefaultCompressionLevel"?: number;
}

export namespace ConfigurationVariables {
  export enum CompletionType {
    NoChain = "NO_CHAIN",
    Chain = "CHAIN",
    Release = "RELEASE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultAuthenticationPlugin {
    MysqlNativePassword = "mysql_native_password",
    Sha256Password = "sha256_password",
    CachingSha2Password = "caching_sha2_password",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TransactionIsolation {
    ReadUncommitted = "READ-UNCOMMITTED",
    ReadCommited = "READ-COMMITED",
    ReadCommitted = "READ-COMMITTED",
    RepeatableRead = "REPEATABLE-READ",
    Serializable = "SERIALIZABLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ConfigurationVariables): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
