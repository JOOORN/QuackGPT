/*
 * Copyright (c) 2023 DuckDuckGo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.duckduckgo.autofill.impl

import com.duckduckgo.autofill.api.feature.AutofillFeatureName
import com.duckduckgo.autofill.api.feature.AutofillSubfeatureName

/**
 * Convenience method to get the [AutofillFeatureName] from its [String] value
 */
fun autofillFeatureValueOf(value: String): AutofillFeatureName? {
    return AutofillFeatureName.values().find { it.value == value }
}

/**
 * Convenience method to get the [AutofillSubfeatureName] from its [String] value
 */
fun autofillSubFeatureValueOf(featureName: String): AutofillSubfeatureName? {
    return AutofillSubfeatureName.values().find { it.value == featureName }
}