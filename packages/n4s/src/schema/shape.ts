import hasOwnProperty from 'hasOwnProperty';

import type { TLazy } from 'genEnforceLazy';
import loose from 'loose';
import type { TRuleDetailedResult } from 'ruleReturn';
import * as ruleReturn from 'ruleReturn';

export default function shape(
  inputObject: Record<string, any>,
  shapeObject: Record<string, TLazy>
): TRuleDetailedResult {
  const baseRes = loose(inputObject, shapeObject);
  if (!baseRes.pass) {
    return baseRes;
  }
  for (const key in inputObject) {
    if (!hasOwnProperty(shapeObject, key)) {
      return ruleReturn.failing();
    }
  }

  return ruleReturn.passing();
}