import { formatSegmentWithContentModel } from '../utils/formatSegmentWithContentModel';
import type { IEditor } from 'roosterjs-content-model-types';

/**
 * Set letter spacing
 * @param editor The editor to operate on
 * @param letterSpacing The letter spacing to set (e.g., '1px', '0.1em', 'normal'). Pass null to remove existing letter spacing.
 */
export function setLetterSpacing(editor: IEditor, letterSpacing: string | null) {
    editor.focus();

    formatSegmentWithContentModel(
        editor,
        'setLetterSpacing',
        letterSpacing === null
            ? format => {
                  delete format.letterSpacing;
              }
            : format => {
                  format.letterSpacing = letterSpacing;
              },
        undefined /* segmentHasStyleCallback*/,
        true /*includingFormatHandler*/
    );
}
