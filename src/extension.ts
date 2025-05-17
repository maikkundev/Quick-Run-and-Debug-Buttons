import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let debugCommand = vscode.commands.registerCommand('quick-run-debug-buttons.debug', () => {
    vscode.commands.executeCommand('workbench.action.debug.start');
  });
  context.subscriptions.push(debugCommand);

  let runCommand = vscode.commands.registerCommand('quick-run-debug-buttons.run', () => {
    vscode.commands.executeCommand('workbench.action.debug.run');
  });
  context.subscriptions.push(runCommand);
}

export function deactivate() {}
