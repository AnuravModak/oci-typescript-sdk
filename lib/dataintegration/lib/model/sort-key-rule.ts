/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A rule to define the set of fields to sort by, and whether to sort by ascending or descending values.
 */
export interface SortKeyRule {
  "wrappedRule"?:
    | model.RenameRule
    | model.TypeListRule
    | model.TypedNamePatternRule
    | model.NamePatternRule
    | model.GroupedNamePatternRule
    | model.NameListRule;
  /**
   * Specifies if the sort key has ascending order.
   */
  "isAscending"?: boolean;
}

export namespace SortKeyRule {
  export function getJsonObj(obj: SortKeyRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "wrappedRule": obj.wrappedRule
          ? model.ProjectionRule.getJsonObj(obj.wrappedRule)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SortKeyRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "wrappedRule": obj.wrappedRule
          ? model.ProjectionRule.getDeserializedJsonObj(obj.wrappedRule)
          : undefined
      }
    };

    return jsonObj;
  }
}
