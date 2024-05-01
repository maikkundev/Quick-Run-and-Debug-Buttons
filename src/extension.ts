import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let config = vscode.workspace.getConfiguration("quick-run-debug-buttons");
  let debugButtonAction = config.get("debugButton");
  let runButtonAction = config.get("runButton");

  vscode.commands.executeCommand(
    "setContext",
    "debugButtonAction",
    debugButtonAction
  );
  vscode.commands.executeCommand(
    "setContext",
    "runButtonAction",
    runButtonAction
  );

  let debugButtonDebug = vscode.commands.registerCommand(
    "quick-run-debug-buttons.debugButtonDebug",
    () => {
      vscode.commands.executeCommand("workbench.action.debug.start");
    }
  );
  context.subscriptions.push(debugButtonDebug);

  let debugButtonRun = vscode.commands.registerCommand(
    "quick-run-debug-buttons.debugButtonRun",
    () => {
      vscode.commands.executeCommand("workbench.action.debug.run");
    }
  );
  context.subscriptions.push(debugButtonRun);

  let runButtonDebug = vscode.commands.registerCommand(
    "quick-run-debug-buttons.runButtonDebug",
    () => {
      vscode.commands.executeCommand("workbench.action.debug.start");
    }
  );
  context.subscriptions.push(runButtonDebug);

  let runButtonRun = vscode.commands.registerCommand(
    "quick-run-debug-buttons.runButtonRun",
    () => {
      vscode.commands.executeCommand("workbench.action.debug.run");
    }
  );
  context.subscriptions.push(runButtonRun);

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (
        e.affectsConfiguration("quick-run-debug-buttons.debugButton") ||
        e.affectsConfiguration("quick-run-debug-buttons.runButton")
      ) {
        vscode.window
          .showInformationMessage(
            "Configuration changed, please restart the extension for changes to take effect.",
            "Restart"
          )
          .then((selection) => {
            if (selection === "Restart") {
              vscode.commands.executeCommand(
                "workbench.action.restartExtensionHost"
              );
            }
          });
      }
    })
  );
}

export function deactivate() {}
