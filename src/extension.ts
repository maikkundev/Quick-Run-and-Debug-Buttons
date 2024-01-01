import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let debugButton = vscode.commands.registerCommand(
    "quick-run-debug-buttons.debugButton",
    () => {
      vscode.commands.executeCommand("workbench.action.debug.start");
    }
  );

  let runButton = vscode.commands.registerCommand(
    "quick-run-debug-buttons.runButton",
    () => {
      vscode.commands.executeCommand("workbench.action.debug.run");
    }
  );

  context.subscriptions.push(debugButton, runButton);
}

export function deactivate() {}
