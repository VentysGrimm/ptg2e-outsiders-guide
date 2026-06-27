const MODULE_ID = "ptg2e-outsiders-guide";
const SYSTEM_ID = "part-time-gods";

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing Part-Time Gods 2e: Outsiders Guide`);

  game.settings.register(MODULE_ID, "showSourceNotes", {
    name: "PTG2E_OUTSIDERS.Settings.ShowSourceNotes.Name",
    hint: "PTG2E_OUTSIDERS.Settings.ShowSourceNotes.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once("ready", () => {
  if (game.system?.id === SYSTEM_ID) return;

  ui.notifications?.warn(game.i18n.localize("PTG2E_OUTSIDERS.Notifications.SystemMismatch"));
});
