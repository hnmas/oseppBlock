/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Colours');

Blockly.Colours = {
  // SVG colours: these must be specificed in #RRGGBB style
  // To add an opacity, this must be specified as a separate property (for SVG fill-opacity)
  "motion": {
    "primary": "#4C97FF",
    "secondary": "#4280D7",
    "tertiary": "#3373CC"
  },
  "looks": {
    "primary": "#9966FF",
    "secondary": "#855CD6",
    "tertiary": "#774DCB"
  },
  "sounds": {
    "primary": "#CF63CF",
    "secondary": "#C94FC9",
    "tertiary": "#BD42BD"
  },
  "control": {
    "primary": "#FFAB19",
    "secondary": "#EC9C13",
    "tertiary": "#CF8B17"
  },
  "event": {
    "primary": "#FFBF00",
    "secondary": "#E6AC00",
    "tertiary": "#CC9900"
  },
  "sensing": {
    "primary": "#5CB1D6",
    "secondary": "#47A8D1",
    "tertiary": "#2E8EB8"
  },
  "pen": {
    "primary": "#0fBD8C",
    "secondary": "#0DA57A",
    "tertiary": "#0B8E69"
  },
  "operators": {
    "primary": "#59C059",
    "secondary": "#46B946",
    "tertiary": "#389438"
  },
  "data": {
    "primary": "#FF8C1A",
    "secondary": "#FF8000",
    "tertiary": "#DB6E00"
  },
  "more": {
    "primary": "#FF6680",
    "secondary": "#FF4D6A",
    "tertiary": "#FF3355"
  },
    //my colours
  "cMathOperation": {
      "primary": "#EC9C13",
      "secondary": "#EC9C13",
      "tertiary": "#CF8B17"
  },
  "cVariableOperation": {
      "primary": "#CF63CF",
      "secondary": "#C94FC9",
      "tertiary": "#BD42BD"
  },
  "cModuleInput": {
      "primary": "#855CD6",
      "secondary": "#855CD6",
      "tertiary": "#774DCB"
  },
  "cArduinoStatement": {
      "primary": "#4C97FF",
      "secondary": "#4280D7",
      "tertiary": "#3373CC"
  },
  "cInstanceStatement": {
      "primary": "#9966FF",
      "secondary": "#855CD6",
      "tertiary": "#774DCB"
  },
  "cArduinoInput": {
      "primary": "#4280D7",
      "secondary": "#4280D7",
      "tertiary": "#3373CC"
  },
  "cInstanceDefine": {
      "primary": "#0fBD8C",
      "secondary": "#0DA57A",
      "tertiary": "#0B8E69"
  },
  "cVariableDefine": {
      "primary": "#59C059",
      "secondary": "#46B946",
      "tertiary": "#389438"
  },
  "cLoop": {
      "primary": "#FFAB19",
      "secondary": "#EC9C13",
      "tertiary": "#CF8B17"
  },


  "text": "#575E75",
  "workspace": "#F9F9F9",
  "toolboxHover": "#4C97FF",
  "toolboxSelected": "#005053",//"toolboxSelected": "#e9eef2",
  "toolboxText": "#112222",//"toolboxText": "#575E75",
  "toolbox": "#006468",//"toolbox": "#FFFFFF",
  "flyout": "#006468",//"flyout": "#F9F9F9",
  "scrollbar": "#CECDCE",
  "scrollbarHover": '#CECDCE',
  "textField": "#FFFFFF",
  "insertionMarker": "#000000",
  "insertionMarkerOpacity": 0.2,
  "dragShadowOpacity": 0.3,
  "stackGlow": "#FFF200",
  "stackGlowOpacity": 1,
  "replacementGlow": "#FFFFFF",
  "replacementGlowOpacity": 1,
  "colourPickerStroke": "#FFFFFF",
  // CSS colours: support RGBA
  "fieldShadow": "rgba(0,0,0,0.1)",
  "dropDownShadow": "rgba(0, 0, 0, .3)",
  "numPadBackground": "#547AB2",
  "numPadBorder": "#435F91",
  "numPadActiveBackground": "#435F91",
  "numPadText": "#FFFFFF",
  "valueReportBackground": "#FFFFFF",
  "valueReportBorder": "#AAAAAA"
};
