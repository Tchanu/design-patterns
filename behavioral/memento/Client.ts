import { TextEditor } from './TextEditor';
import { HistoryManager } from './HistoryManager';

const textEditor = new TextEditor('');
const historyManager = new HistoryManager(textEditor);

// add something into the text editor and save
textEditor.write('Hel');
historyManager.save(); // snapshot created
textEditor.write('lo');
historyManager.save(); // snapshot created
historyManager.print(); // [ 'Hel', 'Hello' ]

// append more text
textEditor.write(' Word!');
textEditor.print(); // Hello Word!

// oops! we made a mistake let's try to undo and complete
historyManager.undo(); // state restored
historyManager.print(); // [ 'Hel' ]
textEditor.print(); // Hello
textEditor.write(', World!');
textEditor.print(); // Hello world!
