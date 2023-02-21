import * as vscode from 'vscode';
import { TodoViewProvider } from './TodoViewProvider';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const provider = new TodoViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			TodoViewProvider.viewType,
		  provider
		)
	);

    let openWebView = vscode.commands.registerCommand('todos.openview', () => {
		// Display a message box to the user
		vscode.window.showInformationMessage('Command " Sidebar View [todos.openview] " called.');
	});
	context.subscriptions.push(openWebView);
}

// This method is called when your extension is deactivated
export function deactivate() {}
