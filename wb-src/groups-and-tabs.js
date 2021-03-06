const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Editor Groups & Tabs');

// // Tabs
// let activeBg = palette.editorBg;
// let activeFg = palette.tabActiveFg;

// let inactiveBg = activeBg.desaturate(0.05).brighten(0.6);
// let inactiveFg = activeFg.darken();

// let tabBorder = palette.editorBg;
// let groupBorder = palette.editorBg.set('hsl.l', '-0.1');

// // Groups
// let tabsBg = palette.groundBg;
// let noTabsBg = inactiveBg;

// log.val('tab active contrast', chroma.contrast(activeBg, activeFg).toFixed(2));
// log.val('tab inactive contrast', chroma.contrast(inactiveBg, inactiveFg).toFixed(2));

module.exports = {
  // 'editorGroup.background': chroma('orange'),
  // 'editorGroup.border': groupBorder, // 1px vertical line between groups
  // 'editorGroup.dropBackground': chroma('hotpink'),
  'editorGroupHeader.noTabsBackground': palette.tabs.noTabsBg,
  'editorGroupHeader.tabsBackground': palette.tabs.groupTabsBg,
  // 'editorGroupHeader.tabsBorder': tabBorder, // 1px bottom border
  'tab.activeBackground': palette.tabs.activeBg,
  // 'tab.activeForeground': activeFg,
  // 'tab.border': tabBorder, // left right 1px border
  // 'tab.activeBorder': tabBorder, // aditional 1px bottom border on active tab
  // 'tab.unfocusedActiveBorder': tabBorder,
  'tab.inactiveBackground': palette.tabs.inactiveBg,
  // 'tab.inactiveForeground': inactiveFg,
  // 'tab.unfocusedActiveForeground': inactiveFg,
  // 'tab.unfocusedInactiveForeground': inactiveFg,
};